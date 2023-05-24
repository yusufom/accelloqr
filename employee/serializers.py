from rest_framework import serializers
from .models import Employee, Email, Telephone, Website, Socials, Qr
from django.db import transaction  


class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = ('name', 'email')

class TelephoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Telephone
        fields = ('name', 'type', 'phone')

class WebsiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Website
        fields = ('name', 'url')

class SocialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Socials
        fields = ('name', 'type', 'url')

class QrSerializer(serializers.ModelSerializer):
    class Meta:
        model = Qr
        fields = ('png', 'svg', 'url')


class EmployeeSerializer(serializers.ModelSerializer):
    ref = serializers.CharField(read_only=True)
    telephone_employee = TelephoneSerializer(many=True)
    email_employee = EmailSerializer(many=True) 
    website_employee = WebsiteSerializer(many=True)
    socials_employee = SocialsSerializer(many=True)

    class Meta:
        model = Employee
        fields = ('ref','firstName', 'surname', 'gender', 'address', 'company', 'position', 'summary', 'telephone_employee', 'email_employee', 'website_employee', 'socials_employee')

    

    def create(self, validated_data):
        telephone_data = validated_data.pop('telephone_employee')
        email_data = validated_data.pop('email_employee')
        website_data = validated_data.pop('website_employee')
        socials_data = validated_data.pop('socials_employee')

        with transaction.atomic():
            employee = Employee.objects.create(**validated_data)

            telephone_instances = [Telephone(employee=employee, **tel) for tel in telephone_data]
            email_instances = [Email(employee=employee, **email) for email in email_data]
            website_instances = [Website(employee=employee, **web) for web in website_data]
            socials_instances = [Socials(employee=employee, **socials) for socials in socials_data]

            Telephone.objects.bulk_create(telephone_instances)
            Email.objects.bulk_create(email_instances)
            Website.objects.bulk_create(website_instances)
            Socials.objects.bulk_create(socials_instances)

        return employee
    
class EmployeeImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = ('avatar',)


class EmployeeGetSerializer(serializers.ModelSerializer):
    telephone_employee = TelephoneSerializer(many=True)
    email_employee = EmailSerializer(many=True) 
    website_employee = WebsiteSerializer(many=True)
    socials_employee = SocialsSerializer(many=True)

    class Meta:
        model = Employee
        fields = ('avatar', 'ref','firstName', 'surname', 'gender', 'address', 'company', 'position', 'summary', 'telephone_employee', 'email_employee', 'website_employee', 'socials_employee')

class AllEmployeeSerializer(serializers.ModelSerializer):
    telephone_employee = TelephoneSerializer(many=True)
    email_employee = EmailSerializer(many=True) 
    website_employee = WebsiteSerializer(many=True)
    socials_employee = SocialsSerializer(many=True)
    qr_employee = QrSerializer()

    class Meta:
        model = Employee
        fields = ('avatar', 'ref','firstName', 'surname', 'gender', 'address', 'company', 'position', 'summary', 'telephone_employee', 'email_employee', 'website_employee', 'socials_employee', 'qr_employee')