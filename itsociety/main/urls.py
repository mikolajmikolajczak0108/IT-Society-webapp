from django.urls import path
from . import views

urlpatterns = [
    path('offers/', views.OfferView.as_view(), name='offers'),
    path('contact/', views.ContactView.as_view(), name='contact'),
]
