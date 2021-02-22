# Generated by Django 3.0.3 on 2020-05-17 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Account', '0009_auto_20200516_2308'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='identity',
            field=models.IntegerField(choices=[(1, '管理员'), (2, '导师'), (3, '学员')], default=3, verbose_name='身份'),
        ),
    ]