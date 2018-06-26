"""Sample Testing of Merging Multiple PDFs into One PDF File."""

# Written by Shuta Suzuki (shutas@umich.edu)

import os
import PyPDF2


# Initialize List of PDF Readers to be Used to Merge
pdf_reader_list = []

# Get Directory Names
current_directory = os.getcwd()
test_files_directory = os.path.join(current_directory, "Test_Files")

# Insert Test Files into List (Note: Order of Readers is Order They're Combined)
for filename in os.listdir(test_files_directory):
    filename = os.path.join(test_files_directory, filename)
    pdf_reader = PyPDF2.PdfFileReader(open(filename, "rb"))
    pdf_reader_list.append(pdf_reader)

# PDF Reader and Merger
pdf_merger = PyPDF2.PdfFileMerger()

# Feed PDF Reader to PDF Merger
for r in pdf_reader_list:
	pdf_merger.append(r)

# Create Merged PDF File
pdf_merger.write("Combined.pdf")
