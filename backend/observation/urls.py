"""
URL mappings for the observation app.
"""
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from observation import views

router = DefaultRouter()
router.register(r'observations', views.ObservationViewSet)

app_name = 'observation'

urlpatterns = [
    path('', include(router.urls)),
]
