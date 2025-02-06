"""
Models for the observation API.
"""
from django.db import models

# Create your models here.


class Observation(models.Model):
    """Observation model."""

    # TODO: Check a more appropriate field type for the gps fields (GeoDjango or similar).
    # TODO: Check GPS precision.
    gps_latitude = models.DecimalField(max_digits=9, decimal_places=6)
    gps_longitude = models.DecimalField(max_digits=9, decimal_places=6)
    picture_url = models.URLField()
    timestamp = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='pending')
