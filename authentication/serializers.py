from django.contrib.auth import get_user_model
from rest_framework import serializers

from authentication.models import SignupCode


User = get_user_model()
User.__init__.unique = True

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'is_superuser')


class UserSignUpSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=300, required=True)
    password = serializers.CharField(required=True)
    code = serializers.CharField(required=True)

class UserLoginSerializer(serializers.Serializer):
    """
    A user serializer for logging in the user
    """
    username = serializers.CharField(max_length=300, required=True)
    password = serializers.CharField(required=True)

    extra_kwargs = {
        "password": {
            "write_only": True
        }
    }