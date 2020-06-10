from django.db import models


class ArticleModel(models.Model):
    title = models.CharField(max_length=100)
    info = models.CharField(max_length=100)
    content = models.TextField()
    pub_time = models.DateTimeField(auto_now_add=True)
    classify = models.ForeignKey('ClassifyModel', on_delete=models.SET_NULL,null=True)
    author = models.ForeignKey('blogauth.User',on_delete=models.SET_NULL,null=True)
    class Meta:
        ordering = ['-pub_time']
        verbose_name = '文章管理'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.title

class ClassifyModel(models.Model):
    name = models.CharField(max_length=20)

    class Meta:
        verbose_name = "分类管理"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name

