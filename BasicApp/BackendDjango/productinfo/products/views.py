from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.conf import settings
from django.urls import reverse
from django.contrib import messages

import requests
import shopify

# Create your views here.

def _return_address(request):
    return request.session.get('return_to') or reverse('myhome')

def index(request):
	return HttpResponse("Hello world! You are at the products index.")

def home(request):
	response = request.get('http://freegeoip.net/json/')
	geodata = response.json()
	geodata = 'Okay works.'
	return HttpResponse(geodata)

def login(request):
	#Ask user for their shopify address
	
	#If the shopify address provided in the URL,
	#just skip to authenticate

	if request.POST.get('shop'):
		print('Going to auth..')
		return authenticate(request)
	print('Going to authenticate..')
	return render(request,'login.html',{})

def authenticate(request):
	shop = request.POST.get('shop')
	if shop:
		print('INSIDE AUTHENTICATE')
		client_id = settings.SHOPIFY_API_KEY
		print(client_id)
		scope = settings.SHOPIFY_API_SCOPE
		redirect_uri = request.build_absolute_uri(reverse('finalize'))
		shopify.Session.setup(api_key='b5716f24a1d8f18f32a269185e1c97c7', secret='a6ac06d53c788a9f8ce3ddaffcfecf99')
		permission_url = shopify.Session(shop.strip()).create_permission_url(scope, redirect_uri,client_id)
		print(permission_url)
		return redirect(permission_url)

def finalize(request):
	shop_url = request.GET.get('shop')
	print('Inside finalizeeee')
	try:
	    shopify_session = shopify.Session(shop_url)
	    print(request.GET)
	    params = {
		"shop": shop_url,
		"code": request.GET['code'],
		"timestamp": request.GET['timestamp'],
		"hmac": request.GET['hmac'],
	    }
	    	
	    request.session['shopify'] = {
		"shop_url": shop_url,
		"access_token": shopify_session.request_token(params)
	    }

	except Exception:
	    print('Could not login')
	    messages.error(request,"Could not log in to shopify store.")
	    return redirect(reverse('login'))

	messages.info(request,"Logged in to Shopify Store.")

	response = redirect(_return_address(request))
	request.session.pop('return_to', 1)
	return response
