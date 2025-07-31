import json

file_path = '/home/ubuntu/toque-ideal-site/src/assets/products.json'

with open(file_path, 'r') as f:
    products = json.load(f)

image_paths = [product['image'] for product in products]

duplicate_images = set()
seen_images = set()

for image_path in image_paths:
    if image_path in seen_images:
        duplicate_images.add(image_path)
    else:
        seen_images.add(image_path)

if duplicate_images:
    print('Imagens duplicadas encontradas:')
    for img in duplicate_images:
        print(img)
else:
    print('Nenhuma imagem duplicada encontrada.')


