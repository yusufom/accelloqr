from django.contrib import admin
from .models import Employee, Email, Telephone, Socials, Qr

# Register your models here.

class EmailAdmin(admin.TabularInline):
    model = Email
    extra = 0

class TelephoneAdmin(admin.TabularInline):
    model = Telephone
    extra = 0


class SocialsAdmin(admin.TabularInline):
    model = Socials
    extra = 0

class QrAdmin(admin.TabularInline):
    model = Qr
    extra = 0

class QrModelAdmin(admin.ModelAdmin):
    list_display	=	['employee','url',]


class EmployeeAdmin(admin.ModelAdmin):
    inlines = [EmailAdmin, TelephoneAdmin, SocialsAdmin, QrAdmin ]
    list_display	=	['ref','firstName','surname','created_at',]

admin.site.register(Employee, EmployeeAdmin)
admin.site.register(Email)
admin.site.register(Telephone)
admin.site.register(Socials)
admin.site.register(Qr, QrModelAdmin)
