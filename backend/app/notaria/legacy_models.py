
from django.db import models


class Cliente2(models.Model):
    idcontratante = models.CharField(primary_key=True, max_length=10)
    idcliente = models.CharField(max_length=10)
    tipper = models.CharField(max_length=1)
    apepat = models.CharField(max_length=100)
    apemat = models.CharField(max_length=100)
    prinom = models.CharField(max_length=100)
    segnom = models.CharField(max_length=100)
    nombre = models.CharField(max_length=1000)
    direccion = models.CharField(max_length=3000)
    idtipdoc = models.IntegerField()
    numdoc = models.CharField(max_length=50)
    email = models.CharField(max_length=300)
    telfijo = models.CharField(max_length=20)
    telcel = models.CharField(max_length=20)
    telofi = models.CharField(max_length=20)
    sexo = models.CharField(max_length=1)
    idestcivil = models.IntegerField()
    natper = models.CharField(max_length=50)
    conyuge = models.CharField(max_length=10)
    nacionalidad = models.CharField(max_length=100)
    idprofesion = models.IntegerField()
    detaprofesion = models.CharField(max_length=1000, blank=True, null=True)
    idcargoprofe = models.IntegerField()
    profocupa = models.CharField(max_length=1000)
    dirfer = models.CharField(max_length=300)
    idubigeo = models.CharField(max_length=6)
    cumpclie = models.CharField(max_length=15)
    fechaing = models.CharField(max_length=10)
    razonsocial = models.CharField(max_length=3000)
    domfiscal = models.CharField(max_length=3000)
    telempresa = models.CharField(max_length=12)
    mailempresa = models.CharField(max_length=200)
    contacempresa = models.CharField(max_length=3000)
    fechaconstitu = models.CharField(max_length=12)
    idsedereg = models.IntegerField()
    numregistro = models.CharField(max_length=50)
    numpartida = models.CharField(max_length=50)
    actmunicipal = models.CharField(max_length=3000)
    tipocli = models.CharField(max_length=1)
    impeingre = models.CharField(max_length=10)
    impnumof = models.CharField(max_length=50)
    impeorigen = models.CharField(max_length=3000)
    impentidad = models.CharField(max_length=3000)
    impremite = models.CharField(max_length=3000)
    impmotivo = models.CharField(max_length=3000)
    residente = models.CharField(max_length=2)
    docpaisemi = models.CharField(max_length=100)
    partidaconyuge = models.CharField(max_length=15, blank=True, null=True)
    separaciondebienes = models.CharField(max_length=1, blank=True, null=True)
    idsedeconyuge = models.CharField(max_length=11, blank=True, null=True)
    profesion_plantilla = models.CharField(
        max_length=200, blank=True, null=True
    )
    ubigeo_plantilla = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cliente2'
