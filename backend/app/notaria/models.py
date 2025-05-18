from django.db import models


class Usuarios(models.Model):
    idusuario = models.AutoField(primary_key=True)
    loginusuario = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    apepat = models.CharField(max_length=100)
    apemat = models.CharField(max_length=100)
    prinom = models.CharField(max_length=100)
    segnom = models.CharField(max_length=100)
    fecnac = models.CharField(max_length=10)
    estado = models.IntegerField()
    domicilio = models.CharField(max_length=100)
    idubigeo = models.IntegerField()
    telefono = models.CharField(max_length=30)
    idcargo = models.IntegerField()
    dni = models.CharField(max_length=8, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'usuarios'
