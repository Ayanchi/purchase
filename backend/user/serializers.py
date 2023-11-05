from rest_framework import serializers
from .models import CustomUser
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ('password', 'email', 'full_name', "inn", 'inn_org', 'org_name',)

    def create(self, validated_data):
        user = CustomUser.objects.create(
            inn=validated_data['inn'],
            email=validated_data['email'],
            full_name=validated_data['full_name'],
            inn_org=validated_data["inn_org"],
            org_name=validated_data["org_name"]
        )

        user.set_password(validated_data['password'])
        user.save()
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    # ceo = CompanySerializer(many=True)

    class Meta:
        model = CustomUser
        fields = ["id", "username", "full_name", "email", ]
