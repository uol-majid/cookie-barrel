from django.shortcuts import render

def home(request):
    return render(request, 'customer/home.html')

def custom_404(request, exception):
    return render(request, '404.html', status=404)

def about(request):
    return render(request, 'customer/about.html')

def cart(request):
    return render(request, 'customer/cart.html')

def checkout(request):
    return render(request, 'customer/checkout.html')

def contact(request):
    return render(request, 'customer/contact.html')

def products(request):
    return render(request, 'customer/products.html')

def product_details(request):
    return render(request, 'customer/product_details.html')

def category_products(request):
    return render(request, 'customer/category_products.html')

def signup_view(request):
    return render(request, 'customer/signup.html')

def login_view(request):
    return render(request, 'customer/login.html')

def forgot_password(request):
    return render(request, 'customer/forgot_password.html')

def my_orders_view(request):
    return render(request, 'customer/my_orders.html')

def order_details_view(request):
    return render(request, 'customer/order_details.html')