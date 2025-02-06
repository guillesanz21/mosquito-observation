"""
Views for the observation API.
"""
from drf_spectacular.utils import extend_schema_view, extend_schema, OpenApiParameter, OpenApiTypes
from rest_framework import viewsets

from observation.models import Observation
from observation import serializers

# Create your views here.


@extend_schema_view(
    list=extend_schema(
        parameters=[
            OpenApiParameter(
                name='status',
                type=OpenApiTypes.STR,
                description="status of the observation",
            )
        ]
    )
)
class ObservationViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Observation model.
    """

    serializer_class = serializers.ObservationSerializer
    queryset = Observation.objects.all()

    def get_queryset(self):
        status = self.request.query_params.get('status', None)
        queryset = self.queryset

        if status:
            queryset = queryset.filter(status=status).order_by('-timestamp')

        return queryset.order_by('-timestamp')
