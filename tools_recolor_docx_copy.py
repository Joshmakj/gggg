from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import re

source = Path(r'C:\Users\joshm\Downloads\Hiring-Toolkit-Cyber-Security-Analyst-111623 (2).docx')
target = Path(r'C:\Users\joshm\Downloads\Hiring-Toolkit-Cyber-Security-Analyst-111623 (2)-orange.docx')
orange = 'F28C28'
green_names = {'008000', '00A000', '00B050', '00A651', '70AD47', '548235', '375623', '92D050', '00FF00'}
def replace_color(match):
    value = match.group(2).upper()
    try:
        r, g, b = int(value[0:2], 16), int(value[2:4], 16), int(value[4:6], 16)
        if value in green_names or (g > r * 1.15 and g > b * 1.15 and g >= 80):
            return match.group(1) + orange + match.group(3)
    except ValueError:
        pass
    return match.group(0)
pattern = re.compile(r'((?:w:)?(?:val|fill|color|bdr)=["\'])([0-9A-Fa-f]{6})(["\'])')
with ZipFile(source, 'r') as zin, ZipFile(target, 'w', ZIP_DEFLATED) as zout:
    for item in zin.infolist():
        data = zin.read(item.filename)
        if item.filename.endswith('.xml'):
            data = pattern.sub(replace_color, data.decode('utf-8')).encode('utf-8')
        zout.writestr(item, data)
print(f'Created {target}')
