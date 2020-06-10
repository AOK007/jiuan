from django.contrib import admin

from .models import ArticleModel,ClassifyModel


admin.site.register(ArticleModel)
admin.site.register(ClassifyModel)