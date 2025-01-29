

import json
import os

script_dir = os.path.dirname(os.path.abspath(__file__))
filenames = [f"{i}.txt" for i in range(22)]
files_content = {}

for filename in filenames:
    filepath = os.path.join(script_dir, filename)
    try:
        with open(filepath, "r") as f:
            files_content[int(filename.split('.')[0])] = f.read()
    except FileNotFoundError:
        print(f"File {filename} not found.")

with open(os.path.join(script_dir, "descriptions.json"), "w") as f:
    json.dump(files_content, f, indent=4)

print("quotes.json has been created successfully.")