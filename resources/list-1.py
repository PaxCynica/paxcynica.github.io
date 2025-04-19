#!/usr/bin/env python3
import os
import re

# Directory to scan
analysis_dir = 'Analysis'  # Update this path if needed
output_file = 'index.html'

def generate_file_list():
    # Check if directory exists
    if not os.path.exists(analysis_dir):
        return "<li>No analysis directory found</li>"
        
    # Get all HTML files
    files = [f for f in os.listdir(analysis_dir) if f.endswith('.html')]
    
    # Sort alphabetically (or by date if you prefer)
    files.sort()
    
    # Generate HTML list items
    html_items = []
    for file in files:
        # Create a nice title from filename
        title = file.replace('.html', '').replace('-', ' ').replace('_', ' ')
        title = ' '.join(word.capitalize() for word in title.split())
        
        html_items.append(f'<li><a href="Analysis/{file}">{title}</a></li>')
    
    if not html_items:
        return "<li>No analysis files found</li>"
    
    return '\n        '.join(html_items)

# Read the existing file
with open(output_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the content between the ul tags after "News Analysis"
pattern = r'(<h2>News Analysis</h2>\s*<ul>).*?(</ul>)'
replacement = r'\1\n        ' + generate_file_list() + r'\n    \2'

updated_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Write the updated file
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Updated index.html with analysis file list")