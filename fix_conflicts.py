import os
import re

def fix_conflicts_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find git conflict markers
    # We want to keep HEAD (which is our local change)
    # The pattern is:
    # <<<<<<< HEAD
    # (our changes)
    # =======
    # (their changes)
    # >>>>>>> [commit hash]
    
    pattern = re.compile(r'<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]*\n', re.DOTALL)
    
    new_content = pattern.sub(r'\1\n', content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed conflicts in {filepath}")

def find_and_fix(directory):
    for root, _, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root or '.next' in root:
            continue
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.css'):
                filepath = os.path.join(root, file)
                try:
                    fix_conflicts_in_file(filepath)
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")

if __name__ == "__main__":
    find_and_fix('.')
