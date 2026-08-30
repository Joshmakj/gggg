import re
import textwrap
from pathlib import Path

import fitz


SOURCE = Path(r"C:\Users\joshm\Downloads\ilovepdf_merged (7).pdf")
OUTPUT = Path(r"C:\Users\joshm\Downloads\final-team-main\final-team-main\public\resources\soc-analyst-interview-preparation.pdf")

PAGE_W, PAGE_H = 595.32, 841.92
ORANGE = (0.93, 0.25, 0.08)
NAVY = (0.06, 0.14, 0.22)
BODY = (0.18, 0.22, 0.27)
MUTED = (0.34, 0.39, 0.45)


def add_header(page, number):
    page.insert_text((55, 38), "SOC ANALYST  /  INTERVIEW PREPARATION", fontname="hebo", fontsize=9, color=ORANGE)
    page.draw_line((55, 49), (540, 49), color=ORANGE, width=1.2)
    page.insert_text((55, 820), f"TEAMUP CONSULTANTS   •   {number}", fontname="helv", fontsize=8, color=MUTED)


def is_heading(text):
    clean = " ".join(text.split())
    return (
        len(clean) < 95
        and (clean.isupper() or clean.endswith(":") or clean.startswith(("How ", "What ", "Why ", "Core ", "Security ", "SIEM ", "Log ", "Deep-")))
    )


def add_text(page, y, text, heading=False):
    text = re.sub(r"\s+", " ", text).strip()
    if not text:
        return y
    size = 15 if heading else 10.8
    leading = 19 if heading else 14.5
    color = ORANGE if heading else BODY
    width = 79 if heading else 92
    lines = textwrap.wrap(text, width=width, break_long_words=False, break_on_hyphens=False)
    needed = leading * len(lines) + (10 if heading else 7)
    if y + needed > 795:
        return None
    for line in lines:
        page.insert_text((55, y), line, fontname="hebo" if heading else "helv", fontsize=size, color=color)
        y += leading
    return y + (5 if heading else 2)


def add_level_focus(doc, page_number):
    page = doc.new_page(width=PAGE_W, height=PAGE_H)
    add_header(page, page_number)
    page.insert_text((55, 90), "LEVEL-SPECIFIC INTERVIEW FOCUS", fontname="hebo", fontsize=22, color=ORANGE)
    page.insert_text((55, 116), "Prepare for the expectations at your target SOC analyst level.", fontname="helv", fontsize=11, color=MUTED)
    cards = [
        ("L1 — Entry", "Focus on basic triage, alert handling, willingness to learn, and accurate documentation.", "Practice explaining sample alerts, review common attack types, and build clear incident notes."),
        ("L2 — Junior / Intermediate", "Focus on investigation depth, tool fluency, pattern recognition, and evidence correlation.", "Trace incidents across logs, practise SIEM queries, and explain how you pivot between tools."),
        ("L3 — Senior / Advanced", "Focus on leadership, detection engineering, strategic thinking, and response coordination.", "Prepare examples of improving detections, leading incidents, and communicating risk to stakeholders."),
    ]
    y = 160
    for title, focus, prepare in cards:
        page.draw_rect((55, y, 540, y + 170), color=ORANGE, width=1.5)
        page.insert_text((76, y + 32), title, fontname="hebo", fontsize=16, color=ORANGE)
        page.insert_textbox((76, y + 52, 518, y + 107), focus, fontname="helv", fontsize=11.5, color=BODY)
        page.insert_text((76, y + 132), "How to prepare", fontname="hebo", fontsize=10.5, color=NAVY)
        page.insert_textbox((76, y + 145, 518, y + 164), prepare, fontname="helv", fontsize=10.5, color=MUTED)
        y += 195
    return page_number + 1


def main():
    source = fitz.open(SOURCE)
    output = fitz.open()

    # Preserve the original cover exactly as supplied.
    cover = output.new_page(width=PAGE_W, height=PAGE_H)
    cover.show_pdf_page(cover.rect, source, 0)

    page_number = 2
    for source_index in range(1, source.page_count):
        blocks = source[source_index].get_text("blocks")
        blocks = sorted(blocks, key=lambda block: (round(block[1] / 8), block[0]))
        page = output.new_page(width=PAGE_W, height=PAGE_H)
        add_header(page, page_number)
        y = 83

        for block in blocks:
            text = block[4].strip()
            if not text:
                continue
            # The source table is clipped on page 5; replace it with a complete page below.
            if source_index == 4 and block[1] > 790:
                continue
            heading = is_heading(text)
            next_y = add_text(page, y, text, heading)
            if next_y is None:
                page_number += 1
                page = output.new_page(width=PAGE_W, height=PAGE_H)
                add_header(page, page_number)
                y = add_text(page, y=83, text=text, heading=heading) or 83
            else:
                y = next_y

        if source_index == 4:
            page_number += 1
            page_number = add_level_focus(output, page_number)
        page_number += 1

    output.save(OUTPUT, garbage=4, deflate=True)
    print(f"Created {OUTPUT} with {output.page_count} pages")


if __name__ == "__main__":
    main()
