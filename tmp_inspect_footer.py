from pathlib import Path
path = Path('app/components/Footer.tsx')
raw = path.read_bytes()
print('length', len(raw))
idx = 4257
print('byte at 4257:', raw[idx])
start = max(0, idx - 40)
end = min(len(raw), idx + 40)
print('window bytes:', raw[start:end])
text = raw.decode('utf-8', 'backslashreplace')
line = text.count('\n', 0, idx) + 1
print('approx line', line)
lines = text.splitlines()
for i in range(max(0, line - 4), min(len(lines), line + 4)):
    print(f'{i+1}: {repr(lines[i])}')
