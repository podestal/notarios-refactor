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
            return kardex_qs
        return None

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
