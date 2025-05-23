from rest_framework.viewsets import ModelViewSet
from . import models
from . import serializers
from . import pagination
from rest_framework.decorators import action
from rest_framework.response import Response


'''
ViewSets for the Notaria app.
These viewsets define the views for the Notaria app.
They are used to handle HTTP requests and responses.
They are also used to define the URL patterns for the Notaria app.
'''


class UsuariosViewSet(ModelViewSet):
    """
    ViewSet for the Usuarios model.
    """
    queryset = models.Usuarios.objects.all()
    serializer_class = serializers.UsuariosSerializer


class PermisosUsuariosViewSet(ModelViewSet):
    """
    ViewSet for the PermisosUsuarios model.
    """
    queryset = models.PermisosUsuarios.objects.all()
    serializer_class = serializers.PermisosUsuariosSerializer


class KardexViewSet(ModelViewSet):
    """
    ViewSet for the Kardex model.
    """
    serializer_class = serializers.KardexSerializer
    pagination_class = pagination.KardexPagination

    def get_queryset(self):
        idtipkar = self.request.query_params.get('idtipkar')
        if idtipkar:
            kardex_qs = models.Kardex.objects.filter(
                idtipkar=idtipkar
            ).order_by('-fechaingreso')

            # user_ids = kardex_qs.values_list('idusuario', flat=True).distinct()
            # self.usuarios_map = {
            #     u.idusuario: u
            #     for u in models.Usuarios.objects.filter(idusuario__in=user_ids)
            # }

            # kardex_ids = kardex_qs.values_list('kardex', flat=True).distinct()
            # self.contratantes_map = {
            #     c['kardex']: c['idcontratante']
            #     for c in models.Contratantes.objects.filter(kardex__in=kardex_ids).values('idcontratante', 'kardex')
            # }

            return kardex_qs

        return None

    # def get_serializer_context(self):
    #     context = super().get_serializer_context()
    #     context['usuarios_map'] = getattr(self, 'usuarios_map', {})
    #     context['contratantes_map'] = getattr(self, 'contratantes_map', {})
    #     return context
    
    def list(self, request, *args, **kwargs):
        """
        List all Kardex objects.
        """
        page_kardex = self.paginate_queryset(self.get_queryset())

        user_ids = set(obj.idusuario for obj in page_kardex)
        kardex_ids = set(obj.kardex for obj in page_kardex)

        usuarios_map = {
            u.idusuario: u
            for u in models.Usuarios.objects.filter(idusuario__in=user_ids)
        }

        contratantes_map = {
            c['kardex']: c['idcontratante']
            for c in models.Contratantes.objects.filter(kardex__in=kardex_ids).values('idcontratante', 'kardex')
        }

        # Pass context manually to serializer if needed
        serializer = self.get_serializer(page_kardex, many=True, context={
            'usuarios_map': usuarios_map,
            'contratantes_map': contratantes_map,
        })

        return self.get_paginated_response(serializer.data)

    @action(detail=False, methods=['get'])
    def kardex_by_correlative(self, request):
        """
        Get the Kardex by id.
        """
        correlative = self.request.query_params.get('correlative')
        if not correlative:
            return Response(
                {"error": "idkardex parameter is required."},
                status=400
            )
        kardex_qs = models.Kardex.objects.filter(
            kardex__startswith=correlative
        )

        serializer = serializers.KardexSerializer(kardex_qs, many=True)
        return Response(serializer.data)


class TipoKarViewSet(ModelViewSet):
    """
    ViewSet for the TipoKar model.
    """
    queryset = models.Tipokar.objects.all()
    serializer_class = serializers.TipoKarSerializer


class ContratantesViewSet(ModelViewSet):
    """
    ViewSet for the Contratante model.
    """
    queryset = models.Contratantes.objects.all()
    serializer_class = serializers.ContratantesSerializer
    pagination_class = pagination.KardexPagination


class Cliente2ViewSet(ModelViewSet):
    """
    ViewSet for the Cliente2 model.
    """
    queryset = models.Cliente2.objects.all()
    serializer_class = serializers.Cliente2Serializer
    pagination_class = pagination.KardexPagination
