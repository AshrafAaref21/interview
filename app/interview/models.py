from django.db import models
from django.utils.translation import gettext_lazy as _


class Interview(models.Model):
    lineNo = models.BigAutoField(primary_key=True, verbose_name=_("Line Number"))
    productName = models.TextField(verbose_name=_("Product Name"))
    unitNo = models.IntegerField(verbose_name=_("Unit Number"))
    price = models.DecimalField(
        max_digits=10, decimal_places=3, verbose_name=_("price")
    )
    quantity = models.DecimalField(
        max_digits=10, decimal_places=3, verbose_name=_("quantity")
    )
    total = models.DecimalField(
        max_digits=10, decimal_places=3, verbose_name=_("Total")
    )
    expiryDate = models.DateTimeField()


class Unit(models.Model):
    unitNo = models.BigAutoField(primary_key=True, verbose_name=_("Unit Number"))
    unitName = models.CharField(max_length=100, verbose_name=_("Unit Name"))
