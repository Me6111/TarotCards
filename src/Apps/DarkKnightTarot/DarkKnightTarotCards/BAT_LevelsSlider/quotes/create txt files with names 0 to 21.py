import os

script_dir = os.path.dirname(os.path.abspath(__file__))
filenames = [f"{i}.txt" for i in range(22)]

for filename in filenames:
    filepath = os.path.join(script_dir, filename)
    with open(filepath, "w") as f:
        pass

print(f"Created {len(filenames)} text files.")