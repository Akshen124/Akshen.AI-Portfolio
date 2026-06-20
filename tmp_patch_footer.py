from pathlib import Path

path = Path('app/components/Footer.tsx')
text = path.read_text()
lines = text.splitlines(keepends=True)
start = 214 - 1  # zero-based index for line 214
end = 263      # exclusive end index for line 263
replacement = [
    '<div className="flex gap-4">\r\n',
    '\r\n',
    '              <a\r\n',
    '\r\n',
    '                href="https://linkedin.com"\r\n',
    '\r\n',
    '                target="_blank"\r\n',
    '\r\n',
    '                className="w-11 h-11 rounded-full bg-zinc-900 border border-purple-500/20 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition"\r\n',
    '\r\n',
    '              >\r\n',
    '\r\n',
    '                <Image src="/linkedin-logo.svg" alt="LinkedIn" width={24} height={24} />\r\n',
    '\r\n',
    '              </a>\r\n',
    '\r\n',
    '              <a\r\n',
    '\r\n',
    '                href="https://github.com"\r\n',
    '\r\n',
    '                target="_blank"\r\n',
    '\r\n',
    '                className="w-11 h-11 rounded-full bg-zinc-900 border border-purple-500/20 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition"\r\n',
    '\r\n',
    '              >\r\n',
    '\r\n',
    '                <Image src="/github-logo.svg" alt="GitHub" width={24} height={24} />\r\n',
    '\r\n',
    '              </a>\r\n',
    '\r\n',
    '              <a\r\n',
    '\r\n',
    '                href="https://wa.me/918531899895"\r\n',
    '\r\n',
    '                target="_blank"\r\n',
    '\r\n',
    '                className="w-11 h-11 rounded-full bg-zinc-900 border border-purple-500/20 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition"\r\n',
    '\r\n',
    '              >\r\n',
    '\r\n',
    '                <Image src="/whatsapp-logo.svg" alt="WhatsApp" width={24} height={24} />\r\n',
    '\r\n',
    '              </a>\r\n',
    '\r\n',
    '            </div>\r\n',
]

if len(lines) < end:
    raise SystemExit(f'File has only {len(lines)} lines, cannot replace range {start+1}-{end}')

lines[start:end] = replacement
path.write_text(''.join(lines))
print('Footer.tsx updated successfully')
