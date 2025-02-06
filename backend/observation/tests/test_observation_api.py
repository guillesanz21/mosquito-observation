"""
Tests for the Observation API
"""

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from observation.models import Observation

OBSERVATION_URL = reverse('observation:observation-list')


def detail_url(observation_id):
    """Return observation detail URL."""
    return reverse('observation:observation-detail', args=[observation_id])


class ObservationApiTests(APITestCase):
    """Test the Observation API."""

    def test_create_observation(self):
        """Test creating an observation."""
        payload = {
            'gps_latitude': 1.0,
            'gps_longitude': 1.0,
            'picture_url': 'http://example.com/picture.jpg',
        }
        response = self.client.post(OBSERVATION_URL, payload)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        observation = Observation.objects.get(id=response.data['id'])
        for key in payload.keys():
            self.assertEqual(payload[key], getattr(observation, key))

    def test_list_observations(self):
        """Test listing observations."""
        Observation.objects.create(
            gps_latitude=1.0,
            gps_longitude=1.0,
            picture_url='http://example.com/picture.jpg',
        )
        Observation.objects.create(
            gps_latitude=2.0,
            gps_longitude=2.0,
            picture_url='http://example.com/picture2.jpg',
        )
        response = self.client.get(OBSERVATION_URL)
        observations = Observation.objects.all()

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), len(observations))
