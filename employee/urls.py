from django.urls import path

from employee import views


urlpatterns = [
    path('employees/all/', views.EmployeeGetAllView.as_view(), name='all_employees'),
    path('create/', views.EmployeeView.as_view(), name='employee_create'),
    path('upload-image/<str:ref>/', views.EmployeeImageUpdateView.as_view(), name='employee_image_upload'),
    path('employees/<str:ref>/', views.EmployeeGetSingleView.as_view(), name='employees'),
    path('employees/update/<str:ref>/', views.EmployeeUpdateView.as_view(), name='employees_update'),
    path('employees/delete/<str:ref>/', views.EmployeeDeleteView.as_view(), name='employees_delete'),
    # path('login/', views.Login.as_view(), name='login'),
    # path('logout/', views.Logout.as_view(), name='logout'),
    # path('users/', views.UserMe.as_view(), name='me'),
]
