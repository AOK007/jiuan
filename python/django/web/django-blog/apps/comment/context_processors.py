from .models import ClassifyModel
def get_classifies(request):
    classifies = ClassifyModel.objects.all()
    if classifies:
        return {'classifies':classifies}
    else:
        return {}