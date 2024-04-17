from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list, name='company-list'),
    path('companies/<int:id>/', views.company_detail, name='company-detail'),
    path('companies/<int:id>/vacancies/', views.CompanyVacancyList.as_view(), name='company-vacancy-list'),
    path('vacancies/', views.VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', views.VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', views.TopTenVacancies.as_view(), name='top-ten-vacancies'),
]