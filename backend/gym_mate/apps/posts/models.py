from django.db import models
from model_utils.models import TimeStampedModel

# Create your models here.

class Posts(TimeStampedModel):
    content = models.CharField(max_length=256)
    # user_id. Tomara el id_user del modelo User cuando este creado 

class ImagePost(TimeStampedModel):
    post_id =  models.ForeignKey(Posts, on_delete=models.CASCADE)
    image_url = models.FileField(upload_to='posts/img',blank= True, null= True)

class VideoPost(TimeStampedModel):
    post_id =  models.ForeignKey(Posts, on_delete=models.CASCADE)
    video_url = models.FileField(upload_to='posts/videos',blank= True, null= True)

class CommentPost(TimeStampedModel):
    content = models.CharField(max_length=256)
    post_id =  models.ForeignKey(Posts, on_delete=models.CASCADE)
    # user_id =