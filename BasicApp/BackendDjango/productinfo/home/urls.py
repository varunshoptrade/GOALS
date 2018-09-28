from django.urls import path

from . import views

urlpatterns = [
	path('myhome',views.myhome,name='myhome')
]
