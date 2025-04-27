from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('cart/', views.cart, name='cart'),
    path('checkout/', views.checkout, name='checkout'),
    path('contact/', views.contact, name='contact'),
    path('products/', views.products, name='products'),
    path('product/', views.product_details, name='product_details'),
    path('category/', views.category_products, name='category_products'),
    path('signup/', views.signup_view, name='signup'),
    path('login/', views.login_view, name='login'),
    path('forgot-password/', views.forgot_password, name='forgot_password'),
    path('my-orders/', views.my_orders_view, name='my_orders'),
    path('order-details/', views.order_details_view, name='order_details'),
]
