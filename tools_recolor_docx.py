from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import tempfile
import re

source = Path(r'C:\Users\joshm\Downloads\Hiring-Toolkit-Cyber-Security-Analyst-111623 (2).docx')
target = source
orange = 'F28C28'

# Common green shades, plus any explicit RGB color whose green channel dominates red/blue.
green_names = {'008000', '00A000', '00B050', '00A651', '70AD47', '548235', '375623', '92D050', '00FF00'}
def replace_color(match):
    value = match.group(2).upper()
    if value in green_names:
        return match.group(1) + orange + match.group(3)
    try:
        r, g, b = int(value[0:2], 16), int(value[2:4], 16), int(value[4:6], 16)
        if g > r * 1.15 and g > b * 1.15 and g >= 80:
            return match.group(1) + orange + match.group(3)
    except ValueError:
        pass
    return match.group(0)

pattern = re.compile(r'((?:w:)?(?:val|fill|color|bdr)=["\'])([0-9A-Fa-f]{6})(["\'])')
with tempfile.NamedTemporaryFile(suffix='.docx', delete=False) as tmp:
    temp_path = Path(tmp.name)
with ZipFile(source, 'r') as zin, ZipFile(temp_path, 'w', ZIP_DEFLATED) as zout:
    for item in zin.infolist():
        data = zin.read(item.filename)
        if item.filename.endswith('.xml'):
            text = data.decode('utf-8')
            text = pattern.sub(replace_color, text)
            data = text.encode('utf-8')
        zout.writestr(item, data)
temp_path.replace(target)
print(f'Updated {target}')
