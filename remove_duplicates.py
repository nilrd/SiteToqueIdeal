import json

file_path = '/home/ubuntu/toque-ideal-site/src/assets/products.json'

with open(file_path, 'r') as f:
    products = json.load(f)

seen_images = set()
unique_products = []

for product in products:
    if product['image'] not in seen_images:
        unique_products.append(product)
        seen_images.add(product['image'])

with open(file_path, 'w') as f:
    json.dump(unique_products, f, indent=2)

print(f'Removidas {len(products) - len(unique_products)} entradas duplicadas. Total de produtos únicos: {len(unique_products)}')


