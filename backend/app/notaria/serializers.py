from rest_framework import serializers
from . import models

'''
Serializers for the Notaria app.
These serializers are used to convert complex data types,
such as querysets and model instances, into native Python datatypes
that can then be easily rendered into JSON, XML or other content types.
'''


class UsuariosSerializer(serializers.ModelSerializer):
    """
    Serializer for the Usuarios model.
    """
    class Meta:
        model = models.Usuarios
        fields = '__all__'


class PermisosUsuariosSerializer(serializers.ModelSerializer):
    """
    Serializer for the PermisosUsuarios model.
    """
    class Meta:
        model = models.PermisosUsuarios
        fields = '__all__'


class TipoKarSerializer(serializers.ModelSerializer):
    """
    Serializer for the TipoKar model.
    """
    class Meta:
        model = models.Tipokar
        fields = '__all__'


class KardexSerializer(serializers.ModelSerializer):
    """
    Serializer for the Kardex model.
    """

    usuario = serializers.SerializerMethodField()

    class Meta:
        model = models.Kardex
        fields = [
            'idkardex',
            'kardex',
            'fechaingreso',
            'contrato',
            'fechaescritura',
            'numescritura',
            'numminuta',
            'folioini',
            'foliofin',
            'numinstrmento',
            'txa_minuta',
            'idusuario',
            'usuario',
            'idtipkar',
        ]

    def get_usuario(self, obj):
        """
        Get the user associated with the Kardex.
        """

        try:
            usuario = models.Usuarios.objects.get(idusuario=obj.idusuario)
            if usuario:
                return (
                    f'{usuario.prinom} {usuario.segnom} '
                    f'{usuario.apepat} {usuario.apemat}'
                )
        except models.Usuarios.DoesNotExist:
            return ''


# SELECT
    # kardex.kardex AS kardex,
    # tipokar.nomtipkar AS nom_tipkar,
    # kardex.fechaingreso AS fec_ingreso,
    # kardex.contrato AS des_acto,
    # kardex.referencia AS referencia,
    # kardex.fechaescritura AS fec_escritura,
    # kardex.numescritura AS num_escritura,
    # kardex.numminuta,
    # kardex.numinstrmento as registro,
    # kardex.folioini,
    # kardex.foliofin,
    # kardex.txa_minuta as tomo,
    # kardex.fechaconclusion AS fec_conclusion,
    # kardex.idkardex,
    # kardex.idtipkar,
    # SUBSTRING_INDEX(kardex.kardex,'-',1) AS temp_kardex,
    # kardex.responsable_new as usuario
    # FROM
    # kardex
    # Inner Join tipokar ON kardex.idtipkar = tipokar.idtipkar";
