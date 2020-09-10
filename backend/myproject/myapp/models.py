from django.db import models


class SuperHeroModel(models.Model):
    superhero = models.CharField(max_length=100)
    secret_identity = models.CharField(max_length=100)
