from django.shortcuts import render
from django.http import HttpResponse

import shopify
from products.decorators import shop_login_required

# Create your views here.

@shop_login_required
def myhome(request):
	shop = shopify.Shop.current()
	#print(products)
	return HttpResponse("Welcome home buddy!")
