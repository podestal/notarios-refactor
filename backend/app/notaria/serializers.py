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
