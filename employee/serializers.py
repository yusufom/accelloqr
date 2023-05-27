from rest_framework import serializers
from .models import Employee, Email, Telephone, Website, Socials, Qr
from django.db import transaction  


class EmailSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Email
        fields = ['id', 'name', 'email']

class TelephoneSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Telephone
        fields = ['id', 'name', 'type', 'phone']

class WebsiteSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Website
        fields = ('id', 'name', 'url')

class SocialsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Socials
        fields = ('id', 'name', 'type', 'url')

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
        print(telephone_data)

       


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
    
    def update(self, instance, validated_data):
        telephone_data = validated_data.pop('telephone_employee', [])
        email_data = validated_data.pop('email_employee', [])
        website_data = validated_data.pop('website_employee', [])
        socials_data = validated_data.pop('socials_employee', [])

        with transaction.atomic():
            instance = super().update(instance, validated_data)

            self.update_associated_telephones(instance, telephone_data)
            self.update_associated_emails(instance, email_data)
            self.update_associated_websites(instance, website_data)
            self.update_associated_socials(instance, socials_data)

        return instance
    
    def update_associated_telephones(self, employee, telephone_data):
        existing_telephones = employee.telephone_employee.all()
        existing_telephone_ids = set(existing_telephones.values_list('id', flat=True))

        new_telephones = []
        updated_telephones = []

        for telephone in telephone_data:
            telephone_id = telephone.get('id')

            if telephone_id in existing_telephone_ids:
                updated_telephones.append(telephone)
            else:
                telephone.pop('id', None)
                new_telephones.append(telephone)

        new_telephone_instances = [Telephone(employee=employee, **tel) for tel in new_telephones]
        Telephone.objects.bulk_create(new_telephone_instances)

        for telephone in updated_telephones:
            telephone_id = telephone.get('id')
            telephone_instance = existing_telephones.get(id=telephone_id)
            telephone_serializer = TelephoneSerializer(telephone_instance, data=telephone, partial=True)
            if telephone_serializer.is_valid():
                telephone_serializer.save()
        removed_telephone_ids = existing_telephone_ids - set([tel.get('id') for tel in telephone_data])
        Telephone.objects.filter(id__in=removed_telephone_ids).delete()
    
    def update_associated_emails(self, employee, email_data):
        existing_emails = employee.email_employee.all()
        existing_email_ids = set(existing_emails.values_list('id', flat=True))

        new_emails = []
        updated_emails = []

        for email in email_data:
            email_id = email.get('id')

            if email_id in existing_email_ids:
                updated_emails.append(email)
            else:
                email.pop('id', None)
                new_emails.append(email)

        new_email_instances = [Email(employee=employee, **email) for email in new_emails]
        Email.objects.bulk_create(new_email_instances)

        for email in updated_emails:
            email_id = email.get('id')
            email_instance = existing_emails.get(id=email_id)
            email_serializer = EmailSerializer(email_instance, data=email, partial=True)
            if email_serializer.is_valid():
                email_serializer.save()
        removed_email_ids = existing_email_ids - set([email.get('id') for email in email_data])
        Email.objects.filter(id__in=removed_email_ids).delete()

    def update_associated_websites(self, employee, website_data):
        existing_websites = employee.website_employee.all()
        existing_website_ids = set(existing_websites.values_list('id', flat=True))

        new_websites = []
        updated_websites = []

        for website in website_data:
            website_id = website.get('id')

            if website_id in existing_website_ids:
                updated_websites.append(website)
            else:
                website.pop('id', None)
                new_websites.append(website)

        new_website_instances = [Website(employee=employee, **website) for website in new_websites]
        Website.objects.bulk_create(new_website_instances)

        for website in updated_websites:
            website_id = website.get('id')
            website_instance = existing_websites.get(id=website_id)
            website_serializer = WebsiteSerializer(website_instance, data=website, partial=True)
            if website_serializer.is_valid():
                website_serializer.save()
        removed_website_ids = existing_website_ids - set([web.get('id') for web in website_data])
        Website.objects.filter(id__in=removed_website_ids).delete()

    def update_associated_socials(self, employee, socials_data):
        existing_socials = employee.socials_employee.all()
        existing_social_ids = set(existing_socials.values_list('id', flat=True))

        new_socials = []
        updated_socials = []

        for social in socials_data:
            social_id = social.get('id')

            if social_id in existing_social_ids:
                updated_socials.append(social)
            else:
                social.pop('id', None)
                new_socials.append(social)

        new_social_instances = [Socials(employee=employee, **social) for social in new_socials]
        Socials.objects.bulk_create(new_social_instances)

        for social in updated_socials:
            social_id = social.get('id')
            social_instance = existing_socials.get(id=social_id)
            social_serializer = SocialsSerializer(social_instance, data=social, partial=True)
            if social_serializer.is_valid():
                social_serializer.save()
        removed_social_ids = existing_social_ids - set([social.get('id') for social in socials_data])
        Socials.objects.filter(id__in=removed_social_ids).delete()

    
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