from django.shortcuts import render
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, get_user_model
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from django.utils.translation import gettext as _
from authentication.models import SignupCode
from rest_api_payload import success_response, error_response
import random

from authentication.serializers import UserLoginSerializer, UserSerializer, UserSignUpSerializer



class Signup(CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserSignUpSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        signup_code = SignupCode.objects.all().first()

        if serializer.is_valid():
            username = serializer.data['username']
            password = serializer.data['password']
            code = serializer.data['code']

            if int(signup_code.code) == int(code):

                try:
                    user = get_user_model().objects.get(username=username)
                    if user:
                        payload = error_response(
                            status=False,
                            message= "Username already exist."
                        )
                        return Response(data=payload, status=status.HTTP_400_BAD_REQUEST)


                except get_user_model().DoesNotExist:
                    user = get_user_model().objects.create_user(username=username)

                # Set user fields provided
                user.set_password(password)
                user.save()

                signup_code = SignupCode.objects.get(code=signup_code.code)
                signup_code.code=random.randint(1000, 9999)
                signup_code.save()
                payload = success_response(
                    status=True,
                    message= 'Signup Successful.',
                    data= serializer.data
                )

                # content = {'detail': _('Signup Successful.'), 'username': username,}
                return Response(data=payload, status=status.HTTP_201_CREATED)
            else:
                content = {'detail': _('Invalid Code, Contact administrator')}
                return Response(content, status=status.HTTP_400_BAD_REQUEST)


        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Login(CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserLoginSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            username = serializer.data['username']
            password = serializer.data['password']
            user = authenticate(username=username, password=password)

            if user:
                if user.is_active:
                    token, created = Token.objects.get_or_create(user=user)
                    payload = success_response(
                        status=True,
                        message= 'Login Successful.',
                        data= {'id': user.id, 'username': user.username, 'token': token.key}
                    )
                    return Response(data=payload, status=status.HTTP_200_OK)
                else:
                    payload = error_response(
                        status=False,
                        message='Your account is not active.'
                    )
                    return Response(data=payload, status=status.HTTP_401_UNAUTHORIZED)
            else:
                payload = error_response(
                        status=False,
                        message='Invalid Username or password'
                )
                return Response(data=payload, status=status.HTTP_401_UNAUTHORIZED)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Logout(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        """
        Remove all auth tokens owned by request.user.
        """
        tokens = Token.objects.filter(user=request.user)
        for token in tokens:
            token.delete()
        payload = success_response(
            status=True,
            message= 'Logout Successful.',
            data= {}
        )
        return Response(data=payload, status=status.HTTP_200_OK)
    
class UserMe(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer

    def get(self, request, format=None):
        return Response(self.serializer_class(request.user).data)
