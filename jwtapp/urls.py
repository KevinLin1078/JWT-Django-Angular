from django.urls import path, include
from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt

from .views import Home
# from rest_framework.authtoken import views
# from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_simplejwt import views as jwt_views


app_name='jwtt'

urlpatterns = [
   # auth token  = from rest_framework.authtoken import views
   # url(r'^login/', views.obtain_auth_token),


   # rest_framework_simplejwt
   url(r'^login/', jwt_views.TokenObtainPairView.as_view()),
   url(r'^refresh/', jwt_views.TokenRefreshView.as_view()),
   url(r'^home/', Home.as_view()),
]