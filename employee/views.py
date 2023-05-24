from django.shortcuts import get_object_or_404, render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
import uuid

from employee.models import Employee
from .serializers import AllEmployeeSerializer, EmployeeGetSerializer, EmployeeImageSerializer, EmployeeSerializer
from rest_framework.generics import CreateAPIView, UpdateAPIView, ListAPIView, DestroyAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.mixins import DestroyModelMixin



class EmployeeView(CreateAPIView):

    permission_classes = (AllowAny,)
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
    # parser_classes = (MultiPartParser,FormParser, JSONParser)


    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        ref_value = "Your chosen value"

        if serializer.is_valid():
            surname = serializer.validated_data["surname"]
            ref_value = str(uuid.uuid5(uuid.uuid4(), surname)).split("-")[0]
            serializer.save(ref=ref_value)
            print('yes')
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print('No')
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EmployeeImageUpdateView(UpdateAPIView):

    permission_classes = (AllowAny,)
    serializer_class = EmployeeImageSerializer
    parser_classes = (MultiPartParser,)

    def get_queryset(self, ref):
        
        employee = Employee.objects.get(ref=ref)
        return employee


    def put(self, request, ref):
        employee = self.get_queryset(ref=ref) 
        serializer = self.serializer_class(data=request.data, instance=employee)

        if serializer.is_valid():
            serializer.save()
            print('upload yes')
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print('No upload o baba mi')
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EmployeeGetSingleView(ListAPIView):

    permission_classes = (AllowAny,)
    serializer_class = EmployeeGetSerializer

    def get_queryset(self, ref):
        try:
            employee = get_object_or_404(Employee, ref=ref)
            return employee

        except Employee.DoesNotExist:
            return None


    def get(self, request, ref):
        employee =  self.get_queryset(ref=ref)
        serializer = self.serializer_class(employee)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class EmployeeGetAllView(ListAPIView):

    permission_classes = (AllowAny,)
    serializer_class = AllEmployeeSerializer

    def get_queryset(self):
        employee = Employee.objects.all()
        return employee


    def get(self, request):
        employee =  self.get_queryset()
        serializer = self.serializer_class(employee, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class EmployeeDeleteView(DestroyAPIView):

    permission_classes = (AllowAny,)
    # serializer_class = AllEmployeeSerializer

    def get_queryset(self, ref):
        
        employee = Employee.objects.get(ref=ref)
        return employee


    def delete(self, request, ref):
        employee =  self.get_queryset(ref=ref)
        employee.delete()
        res = {'message' : f"{employee.surname} {employee.firstName}'s Qr code successfully deleted"}
        return Response(res, status=status.HTTP_200_OK)