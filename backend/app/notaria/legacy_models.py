# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Kardex(models.Model):
    idkardex = models.AutoField(primary_key=True)
    kardex = models.CharField(max_length=30, blank=True, null=True)
    idtipkar = models.IntegerField()
    kardexconexo = models.CharField(max_length=8)
    fechaingreso = models.CharField(max_length=10)
    horaingreso = models.CharField(max_length=10)
    referencia = models.CharField(max_length=3000)
    codactos = models.CharField(max_length=50)
    contrato = models.CharField(max_length=3000)
    idusuario = models.IntegerField()
    responsable = models.IntegerField()
    observacion = models.CharField(max_length=8000)
    documentos = models.CharField(max_length=8000)
    fechacalificado = models.CharField(max_length=10)
    fechainstrumento = models.CharField(max_length=10)
    fechaconclusion = models.CharField(max_length=10)
    numinstrmento = models.CharField(max_length=30, blank=True, null=True)
    folioini = models.CharField(max_length=30, blank=True, null=True)
    folioinivta = models.CharField(max_length=30, blank=True, null=True)
    foliofin = models.CharField(max_length=30, blank=True, null=True)
    foliofinvta = models.CharField(max_length=30, blank=True, null=True)
    papelini = models.CharField(max_length=30, blank=True, null=True)
    papelinivta = models.CharField(max_length=30, blank=True, null=True)
    papelfin = models.CharField(max_length=30, blank=True, null=True)
    papelfinvta = models.CharField(max_length=30, blank=True, null=True)
    comunica1 = models.CharField(max_length=3000)
    contacto = models.CharField(max_length=3000)
    telecontacto = models.CharField(max_length=50)
    mailcontacto = models.CharField(max_length=200)
    retenido = models.IntegerField()
    desistido = models.IntegerField()
    autorizado = models.IntegerField()
    idrecogio = models.IntegerField()
    pagado = models.IntegerField()
    visita = models.IntegerField()
    dregistral = models.CharField(max_length=30)
    dnotarial = models.CharField(max_length=30)
    idnotario = models.IntegerField()
    numminuta = models.CharField(max_length=100)
    numescritura = models.CharField(max_length=100)
    fechaescritura = models.CharField(max_length=10)
    insertos = models.CharField(max_length=6000, blank=True, null=True)
    direc_contacto = models.CharField(max_length=3000, blank=True, null=True)
    txa_minuta = models.CharField(max_length=30, blank=True, null=True)
    idabogado = models.CharField(max_length=10, blank=True, null=True)
    responsable_new = models.CharField(max_length=3000, blank=True, null=True)
    fechaminuta = models.CharField(max_length=15, blank=True, null=True)
    ob_nota = models.CharField(max_length=6000, blank=True, null=True)
    ins_espec = models.CharField(max_length=6000, blank=True, null=True)
    recepcion = models.CharField(max_length=30, blank=True, null=True)
    funcionario_new = models.CharField(max_length=3000, blank=True, null=True)
    nc = models.CharField(max_length=30, blank=True, null=True)
    fecha_modificacion = models.CharField(max_length=10, blank=True, null=True)
    idpresentante = models.IntegerField(db_column='idPresentante', blank=True, null=True)  # Field name made lowercase.
    papeltrasladoini = models.CharField(db_column='papelTrasladoIni', max_length=30, blank=True, null=True)  # Field name made lowercase.
    papeltrasladofin = models.CharField(db_column='papelTrasladoFin', max_length=30, blank=True, null=True)  # Field name made lowercase.
    fktemplate = models.IntegerField(db_column='fkTemplate', blank=True, null=True)  # Field name made lowercase.
    estado_sisgen = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'kardex'
