# www.inphaserecycling.com

This repository includes a helper script for generating Tech Foundations worksheet PDFs using [ReportLab](https://www.reportlab.com/).

## Setup

Install the Python dependency:

```
pip install -r requirements.txt
```

## Generate the worksheets

Run the script to build all three module worksheets into the `output/` directory:

```
python scripts/generate_worksheets.py
```

Each PDF will be written with a descriptive filename, such as `Module1_TechFoundations_Worksheet.pdf`.
