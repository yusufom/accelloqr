from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Employee, Qr
import pyqrcode
from PIL import Image, ImageDraw
from io import BytesIO
from django.core.files import File
import qrcode
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.conf import settings

from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.colormasks import ImageColorMask
from qrcode.image.styles.moduledrawers.pil import RoundedModuleDrawer


@receiver(post_save, sender=Employee)
def created_qrcode(sender, instance, created, **kwargs):
  if not created:
    logo = Image.open(f"{settings.BASE_DIR / 'bg.png'}")
    em = Image.open(f"{settings.BASE_DIR / 'icon.png'}")


    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H, version=2, border=1, box_size=12)
    qr.add_data(f'{instance.get_absolute_url()}')

    qr_img = qr.make_image(
      image_factory=StyledPilImage,
      color_mask=ImageColorMask(back_color=(255, 255, 255), color_mask_image=logo),
      module_drawer=RoundedModuleDrawer(), embeded_image=em
    )

    file_name_png = f'{instance.ref}.png'
    
    # qr = Qr.objects.create(id=instance.id, employee=instance, url=instance.get_absolute_url())
    qr = Qr.objects.get(employee=instance)
    stream = BytesIO()
    qr_img.save(stream, "PNG")
    file_png = InMemoryUploadedFile(stream, None, file_name_png, 'image/png', len(stream.getvalue()), None)
    qr.png.save(file_name_png, file_png, save=True)






