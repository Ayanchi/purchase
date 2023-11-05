from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .managers import CustomUserManager

CHOICES = (("org", "First"), ("sup", "Second"))


class CustomUser(AbstractUser):
    email = models.EmailField(_("email address"), unique=True)
    full_name = models.CharField()
    inn = models.CharField(unique=True)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["inn"]

    inn_org = models.CharField(unique=True)
    org_name = models.CharField(unique=True)
    role = models.CharField(max_length=3, choices=CHOICES)

    objects = CustomUserManager()

    def __str__(self):
        return self.email

