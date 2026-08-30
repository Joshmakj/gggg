from collections import Counter
from pathlib import Path
from zipfile import ZipFile
import re

doc = Path(r'C:\Users\joshm\Downloads\Hiring-Toolkit-Cyber-Security-Analyst-111623 (2).docx')
counts = Counter()
with ZipFile(doc) as z:
    for name in z.namelist():
        if name.endswith('.xml'):
            data = z.read(name).decode('utf-8', errors='ignore')
            for attr, value in re.findall(r'(?:w:)?(?:val|fill|color|bdr)="([0-9A-Fa-f]{6})"', data):
                counts[value.upper()] += 1
print('\n'.join(f'{k} {v}' for k, v in counts.most_common()))
