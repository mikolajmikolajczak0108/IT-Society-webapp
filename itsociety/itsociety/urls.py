from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("main.urls")),  # Upewnij się, że main.urls jest w cudzysłowach
]
