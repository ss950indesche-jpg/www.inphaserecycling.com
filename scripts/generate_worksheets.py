"""Generate Tech Foundations PDF worksheets using ReportLab."""
from pathlib import Path
from typing import Iterable, Sequence, Tuple

from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

Section = Tuple[str, str]


def _body_style(base_style: ParagraphStyle) -> ParagraphStyle:
    """Return a slightly larger body text style for worksheet entries."""
    return ParagraphStyle(
        name="WorksheetBody",
        parent=base_style,
        fontSize=11,
        leading=15,
    )


def create_module_pdf(output_path: Path, title: str, sections: Iterable[Section]) -> None:
    """Build a single module worksheet PDF.

    Args:
        output_path: Destination path for the PDF file.
        title: Title displayed at the top of the worksheet.
        sections: Iterable of (heading, content) pairs describing worksheet prompts.
    """
    output_path.parent.mkdir(parents=True, exist_ok=True)

    styles = getSampleStyleSheet()
    body_style = _body_style(styles["BodyText"])

    doc = SimpleDocTemplate(str(output_path), pagesize=LETTER, rightMargin=54, leftMargin=54)
    elements = [Paragraph(f"<b>{title}</b>", styles["Title"]), Spacer(1, 0.25 * inch)]

    for heading, content in sections:
        elements.append(Paragraph(f"<b>{heading}</b>", styles["Heading2"]))
        body = content.replace("\n", "<br/>")
        elements.append(Paragraph(body, body_style))
        elements.append(Spacer(1, 0.2 * inch))

    doc.build(elements)


def _make_module_data(output_dir: Path) -> Sequence[Tuple[Path, str, Sequence[Section]]]:
    return [
        (
            output_dir / "Module1_TechFoundations_Worksheet.pdf",
            "Module 1 Worksheet — Tech Foundations",
            [
                (
                    "A) My Tech Setup",
                    "My main device: ______\nMy main browser: ______\nMy main internet: Wi-Fi / Cellular / Ethernet",
                ),
                (
                    "B) The 5-Part Tech Map",
                    "1) Device: ______\n2) Internet: ______\n3) Wi-Fi: ______\n4) Browser/App: ______\n5) Account: ______",
                ),
                (
                    "C) Fix-it Flow",
                    "1) Connection (Wi-Fi/cellular)\n2) Refresh page\n3) Try different browser\n4) Restart device\n5) Check login",
                ),
                (
                    "D) Password Plan",
                    "My passphrase pattern (safe example): Word!WordNumberWord\n2FA enabled on: Email / Bank / Skool",
                ),
                (
                    "E) Phishing Spot Check",
                    "Message: 'Your account will be deleted in 30 minutes. Verify now.'\nRed Flags:\n1) ______\n2) ______\n3) ______",
                ),
                (
                    "F) Reflection",
                    "One thing I learned: ______\nOne thing I will set up: ______",
                ),
            ],
        ),
        (
            output_dir / "Module2_LearningOnlineFast_Worksheet.pdf",
            "Module 2 Worksheet — Learning Online Fast",
            [
                (
                    "A) My Learning Goal",
                    "I want to improve my digital study habits by: ______",
                ),
                (
                    "B) My Note Template",
                    "Topic | Key Idea | Example | Question | Action Step\nFill out at least 3 rows.",
                ),
                (
                    "C) My AI Prompts",
                    "1) ______\n2) ______\n3) ______",
                ),
                (
                    "D) 20-Minute Study Tracker",
                    "Cycle 1 [ ]\nCycle 2 [ ]\nCycle 3 [ ]",
                ),
                (
                    "E) Reflection",
                    "One new tool I tried today: ______\nMy biggest takeaway: ______",
                ),
            ],
        ),
        (
            output_dir / "Module3_DigitalProductivity_Worksheet.pdf",
            "Module 3 Worksheet — Digital Productivity",
            [
                (
                    "A) My Cloud Platform",
                    "Chosen platform: Google Drive / iCloud / Dropbox / OneDrive",
                ),
                (
                    "B) Folder Structure",
                    "Home > Courses > Tech Basics > Module 1\nCreate your own hierarchy below:\n____________________",
                ),
                (
                    "C) Calendar Blocks",
                    "Study Sessions:\nMon [ ]\nWed [ ]\nFri [ ]",
                ),
                (
                    "D) Collaboration Practice",
                    "Share a document safely (View-only link)\nComment added: ______",
                ),
                (
                    "E) Backup Checklist",
                    "[ ] Auto-backup enabled\n[ ] Sensitive files locked\n[ ] Shared links reviewed",
                ),
                (
                    "F) Reflection",
                    "One productivity habit I will build: ______",
                ),
            ],
        ),
    ]


def main() -> None:
    output_dir = Path(__file__).resolve().parent.parent / "output"
    modules = _make_module_data(output_dir)

    for path, title, sections in modules:
        create_module_pdf(path, title, sections)
        print(f"Generated {path.relative_to(output_dir.parent)}")


if __name__ == "__main__":
    main()
