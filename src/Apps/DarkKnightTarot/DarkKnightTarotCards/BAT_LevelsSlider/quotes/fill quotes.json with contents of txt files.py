'''
correct this python code. in the script_dir is 21.txt files 
named from 0.txt to 21.txt - i want you to create in this dir new file named quotes.json 
and fill it with names of the txt files and their contents like this:
{ 0: 'content of 0.txt',
1: 'content of 1.txt,
2: 'content of 2.txt...

import os

script_dir = os.path.dirname(os.path.abspath(__file__))
filenames = [f"{i}.txt" for i in range(22)]

for filename in filenames:
    filepath = os.path.join(script_dir, filename)
    with open(filepath, "w") as f:
        pass
'''


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

with open(os.path.join(script_dir, "quotes.json"), "w") as f:
    json.dump(files_content, f, indent=4)

print("quotes.json has been created successfully.")