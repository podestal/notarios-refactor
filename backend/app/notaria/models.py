from django.db import models
'''
Models for the Notaria app.
These models define the database tables for the Notaria app.
They are used to define the fields and relationships between the tables.
They are also used to define the database constraints and indexes.
'''


class Usuarios(models.Model):
    """
    Model representing a user in the system.
    """
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


class PermisosUsuarios(models.Model):
    """
    Model representing the permissions of a user in the system.
    """
    idusuario = models.CharField(primary_key=True, max_length=9)
    kardex = models.CharField(max_length=30, blank=True, null=True)
    newkar = models.CharField(max_length=1, blank=True, null=True)
    editkar = models.CharField(max_length=1, blank=True, null=True)
    protesto = models.CharField(max_length=1, blank=True, null=True)
    newprot = models.CharField(max_length=1, blank=True, null=True)
    editprot = models.CharField(max_length=1, blank=True, null=True)
    pviaje = models.CharField(max_length=1, blank=True, null=True)
    newvia = models.CharField(max_length=1, blank=True, null=True)
    editvia = models.CharField(max_length=1, blank=True, null=True)
    poder = models.CharField(max_length=1, blank=True, null=True)
    newpod = models.CharField(max_length=1, blank=True, null=True)
    editpod = models.CharField(max_length=1, blank=True, null=True)
    cartas = models.CharField(max_length=1, blank=True, null=True)
    newcar = models.CharField(max_length=1, blank=True, null=True)
    editcar = models.CharField(max_length=1, blank=True, null=True)
    libros = models.CharField(max_length=1, blank=True, null=True)
    newlib = models.CharField(max_length=1, blank=True, null=True)
    editlib = models.CharField(max_length=1, blank=True, null=True)
    capaz = models.CharField(max_length=1, blank=True, null=True)
    newcap = models.CharField(max_length=1, blank=True, null=True)
    editcap = models.CharField(max_length=1, blank=True, null=True)
    incapaz = models.CharField(max_length=1, blank=True, null=True)
    newinca = models.CharField(max_length=1, blank=True, null=True)
    editinca = models.CharField(max_length=1, blank=True, null=True)
    domiciliario = models.CharField(max_length=1, blank=True, null=True)
    newdom = models.CharField(max_length=1, blank=True, null=True)
    editdom = models.CharField(max_length=1, blank=True, null=True)
    caracteristicas = models.CharField(max_length=1, blank=True, null=True)
    newcarac = models.CharField(max_length=1, blank=True, null=True)
    editcarac = models.CharField(max_length=1, blank=True, null=True)
    indicronoep = models.CharField(max_length=1, blank=True, null=True)
    indicrononc = models.CharField(max_length=1, blank=True, null=True)
    indicronotv = models.CharField(max_length=1, blank=True, null=True)
    indicronogm = models.CharField(max_length=1, blank=True, null=True)
    indicronotest = models.CharField(max_length=1, blank=True, null=True)
    indicronoprot = models.CharField(max_length=1, blank=True, null=True)
    infocamacome = models.CharField(max_length=1, blank=True, null=True)
    indicronocar = models.CharField(max_length=1, blank=True, null=True)
    indicronolib = models.CharField(max_length=1, blank=True, null=True)
    indicronovia = models.CharField(max_length=1, blank=True, null=True)
    indicronopod = models.CharField(max_length=1, blank=True, null=True)
    indicronocapaz = models.CharField(max_length=1, blank=True, null=True)
    indicronoincapaz = models.CharField(max_length=1, blank=True, null=True)
    alfaep = models.CharField(max_length=1, blank=True, null=True)
    alfagm = models.CharField(max_length=1, blank=True, null=True)
    alfanc = models.CharField(max_length=1, blank=True, null=True)
    alfatv = models.CharField(max_length=1, blank=True, null=True)
    alfatesta = models.CharField(max_length=1, blank=True, null=True)
    pdtep = models.CharField(max_length=1, blank=True, null=True)
    pdtgm = models.CharField(max_length=1, blank=True, null=True)
    pdtveh = models.CharField(max_length=1, blank=True, null=True)
    pdtlib = models.CharField(max_length=1, blank=True, null=True)
    ro = models.CharField(max_length=1, blank=True, null=True)
    reportuif = models.CharField(max_length=1, blank=True, null=True)
    reportpendfirma = models.CharField(max_length=1, blank=True, null=True)
    emicompro = models.CharField(max_length=1, blank=True, null=True)
    anucompro = models.CharField(max_length=1, blank=True, null=True)
    cancelcompro = models.CharField(max_length=1, blank=True, null=True)
    reportcomproemi = models.CharField(max_length=1, blank=True, null=True)
    pendpago = models.CharField(max_length=1, blank=True, null=True)
    cancelados = models.CharField(max_length=1, blank=True, null=True)
    manteusu = models.CharField(max_length=1, blank=True, null=True)
    permiusu = models.CharField(max_length=1, blank=True, null=True)
    tipoacto = models.CharField(max_length=1, blank=True, null=True)
    mantecondi = models.CharField(max_length=1, blank=True, null=True)
    manteclie = models.CharField(max_length=1, blank=True, null=True)
    manteimpe = models.CharField(max_length=1, blank=True, null=True)
    sellocartas = models.CharField(max_length=1, blank=True, null=True)
    helpprot = models.CharField(max_length=1, blank=True, null=True)
    contpod = models.CharField(max_length=1, blank=True, null=True)
    manteservi = models.CharField(max_length=1, blank=True, null=True)
    asignaregis = models.CharField(max_length=1, blank=True, null=True)
    tipo_cambio = models.CharField(max_length=1, blank=True, null=True)
    seriescaja = models.CharField(max_length=1, blank=True, null=True)
    datonot = models.CharField(max_length=1, blank=True, null=True)
    editdatonot = models.CharField(max_length=1, blank=True, null=True)
    regserver = models.CharField(max_length=1, blank=True, null=True)
    editserver = models.CharField(max_length=1, blank=True, null=True)
    mant_abogado = models.CharField(max_length=1, blank=True, null=True)
    backup = models.CharField(max_length=1, blank=True, null=True)
    egreso = models.CharField(max_length=1, blank=True, null=True)
    sisgen = models.CharField(max_length=1, blank=True, null=True)
    userresponsable = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'permisos_usuarios'
