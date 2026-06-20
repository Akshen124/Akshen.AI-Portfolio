from pathlib import Path

path = Path('app/components/Footer.tsx')
raw = path.read_bytes()
text = raw.decode('latin-1')
count_a9 = text.count('\xa9')
count_95 = text.count('\x95')
text = text.replace('\xa9', '©').replace('\x95', '•')
path.write_text(text, encoding='utf-8')
print(f'updated {path} with {count_a9} © and {count_95} • replacements')
