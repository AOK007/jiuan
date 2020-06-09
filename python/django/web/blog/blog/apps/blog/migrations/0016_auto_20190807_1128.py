# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2019-08-07 11:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0015_bigcategory_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='bigcategory',
            name='keywords',
            field=models.TextField(default='KenZhang,网络,爬虫,IT,技术,博客,Python,Django', help_text='用来作为SEO中keywords,长度参考SEO标准', max_length=240, verbose_name='关键字'),
        ),
        migrations.AlterField(
            model_name='bigcategory',
            name='description',
            field=models.TextField(default='KenZhang的个人博客，记录生活的瞬间，分享学习的心得，感悟生活，留住感动，静静寻觅生活的美好', help_text='用来作为SEO中description,长度参考SEO标准', max_length=240, verbose_name='大分类描述'),
        ),
        migrations.AlterField(
            model_name='notice',
            name='text',
            field=models.TextField(default='人生苦短，必用Python', null=True, verbose_name='公告'),
        ),
    ]
