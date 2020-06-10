from django.shortcuts import render
from django.conf import settings
from django.core.paginator import Paginator
from django.views.generic import View
from django.http import JsonResponse
from django.utils.decorators import method_decorator

from .models import ArticleModel,ClassifyModel
from apps.blogauth.decorators import blog_login_required

def index_view(request):
    page = int(request.GET.get('p',1))
    classify_id = int(request.GET.get('classify', 0) or 0)

    articles = ArticleModel.objects.select_related('classify','author')

    if classify_id:
        articles = articles.filter(classify=classify_id)

    paginator = Paginator(articles, settings.ONE_PAGE_ARTICLE_COUNT)
    page_obj = paginator.page(page)

    context = {
        'articles': page_obj.object_list,
        'page_obj': page_obj,
        'paginator': paginator,
        'classify_id': classify_id
    }

    return render(request,"index.html",context=context)


def detail_view(request):
    article_id = request.GET.get("id")
    article = ArticleModel.objects.filter(id=article_id)[0]
    context = {
        "article": article
    }
    return render(request,'detail.html',context=context)

@method_decorator(blog_login_required,name='dispatch')
class EditArticleView(View):
    def get(self,request):
        return render(request,"editor.html")
    def post(self,request):
        title = request.POST.get("title")
        info = request.POST.get("info")
        classify_id = request.POST.get("classify")
        content = request.POST.get("content")
        classify = ClassifyModel.objects.get(id=classify_id)
        user = request.user
        ArticleModel.objects.create(title=title,info=info,classify=classify,content=content,author=user)
        json_dict = {"code": 200, "message": "ok"}
        return JsonResponse(json_dict)