from django.db import models

# Create your models here.

class Digimon(models.Model):
  name = models.CharField(max_length=128, help_text="Ingrese el nombre del digimon")
  image = models.CharField(max_length=128, help_text="Ingrese el URL de la imagen")
  level = models.CharField(max_length=128, help_text="Ingrese el nivel por favor")
    
  def __str__(self):
    return f"{self.name}"


