from django.urls import path, re_path, include
from .views import *


urlpatterns = [
    path('tenders/', get_external_data, name='tenders'),
]