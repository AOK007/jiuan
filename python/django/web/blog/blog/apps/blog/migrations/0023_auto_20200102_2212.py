# Generated by Django 2.2.5 on 2020-01-02 22:12

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0022_auto_20200102_2206'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='body',
            field=ckeditor_uploader.fields.RichTextUploadingField(default='', verbose_name='文章内容'),
        ),
    ]
