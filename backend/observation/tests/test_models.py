

from django.test import TestCase

from observation import models


class ModelTests(TestCase):
    def test_create_observation(self):
        """Test creating an observation."""

        observation = models.Observation.objects.create(
            gps_latitude=1.0,
            gps_longitude=1.0,
            picture_url='https://example.com',
            status='pending'
        )

        self.assertEqual(observation.gps_latitude, 1.0)
        self.assertTrue(observation.timestamp)
