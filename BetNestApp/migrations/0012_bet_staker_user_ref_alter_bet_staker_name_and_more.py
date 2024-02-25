# Generated by Django 4.2.9 on 2024-02-25 22:58

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("BetNestApp", "0011_feedback_bet_game_title_alter_bet_date_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="bet",
            name="Staker_User_ref",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="BetNestApp.userprofile",
            ),
        ),
        migrations.AlterField(
            model_name="bet",
            name="Staker_name",
            field=models.CharField(default="Anonymous", max_length=50),
        ),
        migrations.AlterField(
            model_name="bet",
            name="date",
            field=models.DateTimeField(
                default=datetime.datetime(2024, 2, 25, 23, 58, 18, 744563)
            ),
        ),
        migrations.AlterField(
            model_name="feedback",
            name="Complaint_Date",
            field=models.DateTimeField(
                default=datetime.datetime(2024, 2, 25, 23, 58, 18, 745562)
            ),
        ),
        migrations.AlterField(
            model_name="payment",
            name="Payment_Date",
            field=models.DateTimeField(
                default=datetime.datetime(2024, 2, 25, 23, 58, 18, 744563)
            ),
        ),
        migrations.AlterField(
            model_name="userprofile",
            name="Wallet_Address",
            field=models.CharField(
                default="0x0000000000000000000000000000000000",
                max_length=50,
                unique=True,
            ),
        ),
    ]