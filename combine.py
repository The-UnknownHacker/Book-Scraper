import os
from PIL import Image
import re

screenshot_dir = 'your screenshot path here'
output_pdf = 'BookName.pdf'

files = os.listdir(screenshot_dir)

screenshot_files = [f for f in files if f.endswith('.png') or f.endswith('.jpg')]

def extract_number(filename):
    match = re.search(r'(\d+)', filename)
    return int(match.group(1)) if match else float('inf')

screenshot_files.sort(key=extract_number)

image_paths = [os.path.join(screenshot_dir, f) for f in screenshot_files]

print("Order of screenshots to be combined into PDF:")
for file in screenshot_files:
    print(file)

input("Press Enter to proceed with creating the PDF...")

images = []

for img_path in image_paths:
    img = Image.open(img_path)
    images.append(img)

if images:
    images[0].save(output_pdf, save_all=True, append_images=images[1:])
    print(f'Combined screenshots saved as {output_pdf}')
else:
    print('No images found to combine.')
