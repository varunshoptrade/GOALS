from django.urls import path

from . import views

urlpatterns = [
	path('',views.index,name='index'),
	path('home',views.home,name='home'),
	path('login',views.login,name='login'),
	path('authenticate',views.authenticate,name='authenticate'),
	path('finalize',views.finalize,name='finalize'),
]

