"""
Serializers for observation APIs.
"""
from rest_framework import serializers

from observation.models import Observation


class ObservationSerializer(serializers.ModelSerializer):
    """
    Serializer for Observation model.
    """

    class Meta:
        model = Observation
        fields = '__all__'
