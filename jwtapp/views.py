from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView

from django.http import JsonResponse

from rest_framework.permissions import IsAuthenticated

class Home(APIView):
	permission_classes = (IsAuthenticated,)
	
	def get(self, request):
		print(request.user.auth_token.delete())
		return JsonResponse({'stat': 'OK', 'user': request.user.username})