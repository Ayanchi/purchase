from django.urls import path, re_path, include
from .views import *


urlpatterns = [
    path('register/', RegisterView.as_view(), name='auth_register'),
    re_path(r"^auth/",include("djoser.urls.authtoken"), name='auth_login_token'),
    re_path("profile/", UserProfileListAPIView.as_view(), name='auth_login_token'),
]