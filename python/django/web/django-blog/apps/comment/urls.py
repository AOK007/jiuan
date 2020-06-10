from django.urls import path

from . import views

app_name = 'comment'

urlpatterns = [
    path('',views.index_view,name="index"),
    path("detail/",views.detail_view,name="detail"),
    path("edit/",views.EditArticleView.as_view(),name="edit")
]