# Optional asset authoring tool. Requires fonttools and the original macOS Helvetica font.
from pathlib import Path
import xml.etree.ElementTree as ET
from fontTools.ttLib import TTCollection
from fontTools.pens.svgPathPen import SVGPathPen
root=Path(__file__).resolve().parents[1]
ns='http://www.w3.org/2000/svg'
ET.register_namespace('',ns)
tree=ET.parse(root/'public/Document.svg'); svg=tree.getroot()
fonts=TTCollection('/System/Library/Fonts/Helvetica.ttc').fonts
font=next(f for f in fonts if any(n.toUnicode()=='Helvetica-Bold' for n in f['name'].names))
glyphs=font.getGlyphSet(); cmap=font.getBestCmap(); units=font['head'].unitsPerEm
# Convert original positioned letters to paths using the original font, so no device font substitution occurs.
for parent in list(svg.iter()):
 for element in list(parent):
  if element.tag != '{'+ns+'}text': continue
  import re
  size=float(re.search(r'font-size:([\d.]+)px',element.attrib['style'])[1]); scale=size/units
  color=re.search(r'fill:([^;]+)',element.attrib['style'])[1]
  group=ET.Element('{'+ns+'}g',{'fill':color})
  chunks=[(element.text or '',[float(element.get('x','0').removesuffix('px'))])]
  for span in element: chunks.append((span.text or '',[float(x.removesuffix('px')) for x in span.get('x','0').split()]))
  for text,positions in chunks:
   x=positions[0]
   for i,ch in enumerate(text):
    if i<len(positions): x=positions[i]
    glyphname=cmap[ord(ch)]; pen=SVGPathPen(glyphs); glyphs[glyphname].draw(pen)
    ET.SubElement(group,'{'+ns+'}path',{'d':pen.getCommands(),'transform':f'translate({x} 0) scale({scale} {-scale})'})
    x+=font['hmtx'][glyphname][0]*scale
  parent.insert(list(parent).index(element),group); parent.remove(element)
svg.set('viewBox','389 340 820 220'); svg.set('width','820');svg.set('height','220')
tree.write(root/'public/brand/header.svg',encoding='unicode')
tree.write(root/'public/brand/footer.svg',encoding='unicode')
# Monogram keeps its exact original paths and gradient.
mono=ET.Element('{'+ns+'}svg',{'viewBox':'0 0 220 220','width':'220','height':'220'})
mg=next(e for e in svg.iter() if e.get('id')=='monogram'); mg.attrib.pop('transform',None);mono.append(mg)
mono.append(next(e for e in svg if e.tag=='{'+ns+'}defs'))
ET.ElementTree(mono).write(root/'public/brand/monogram.svg',encoding='unicode')
