"""
Views for the observation API.
"""
from rest_framework import viewsets

from observation.models import Observation
from observation import serializers

# Create your views here.


class ObservationViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Observation model.
    """

    serializer_class = serializers.ObservationSerializer
    queryset = Observation.objects.all()
