from django.urls import path, include
from . import views


urlpatterns = [
  path("", views.index),
  path("digimons/js/", views.javascript_calls, name="js_digimons"),
  path("digisave/", views.save_digimon, name="save-digi"),
]