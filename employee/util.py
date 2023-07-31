# qr = pyqrcode.create(f'{instance.get_absolute_url()}')
# stream = BytesIO()

# qr.png(stream, scale=8)
# qr.svg(stream, scale=8)

# file_name_png = f'{instance.ref}.png'
# file_name_svg = f'{instance.ref}.svg'
# file_png = InMemoryUploadedFile(stream, None, file_name_png, 'image/png', len(stream.getvalue()), None)
# file_svg = InMemoryUploadedFile(stream, None, file_name_svg, 'image/svg+xml', len(stream.getvalue()), None)

# qr = Qr.objects.create(id=instance.id, employee=instance, url=instance.get_absolute_url())
# qr.png.save(file_name_png, file_png, save=True)
# qr.svg.save(file_name_svg, file_svg, save=True)