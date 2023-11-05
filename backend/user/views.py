from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from .models import CustomUser
from rest_framework.permissions import *
from .serializers import *
from rest_framework import generics


class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer


class UserProfileListAPIView(generics.ListAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        try:
            token = self.request.META.get('HTTP_AUTHORIZATION').split()[1]
            user = Token.objects.get(key=token).user_id
            return CustomUser.objects.filter(id=user)
        except:
            return Response({"error":"you are not Authenticated"})
