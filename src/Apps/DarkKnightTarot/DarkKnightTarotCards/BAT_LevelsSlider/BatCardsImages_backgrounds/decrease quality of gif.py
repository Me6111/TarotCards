import os
from PIL import Image

# Get the current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Define the source and destination filenames
source_filename = "1.gif"
destination_filename = "1-2.gif"

# Construct the full paths
source_path = os.path.join(current_dir, source_filename)
destination_path = os.path.join(current_dir, destination_filename)

try:
    # Open the GIF image
    img = Image.open(source_path)

    # Determine the original width and height
    original_width, original_height = img.size

    # Calculate the maximum allowed dimension (80px) while maintaining aspect ratio
    max_dimension = 80
    aspect_ratio = original_width / original_height

    if aspect_ratio > 1:  # Wider than tall
        new_width = max_dimension
        new_height = int(max_dimension / aspect_ratio)
    else:  # Taller than wide
        new_height = max_dimension
        new_width = int(max_dimension * aspect_ratio)

    # Resize the image
    resized_img = img.resize((new_width, new_height))

    # Handle multi-frame GIFs
    if img.n_frames > 1:
        num_frames = img.n_frames
        resized_frames = []
        for i in range(num_frames):
            img.seek(i)
            frame = img.copy()
            resized_frame = frame.resize((new_width, new_height))
            resized_frames.append(resized_frame)
        resized_frames[0].save(
            destination_path,
            save_all=True,
            append_images=resized_frames[1:],
            duration=img.info.get('duration', 100),  # Default to 100ms if not provided
            loop=img.info.get('loop', True)  # Default to True if not provided
        )
    else:
        resized_img.save(destination_path)

    print(f"File {source_filename} resized and saved successfully as {destination_filename}")

except FileNotFoundError:
    print(f"Error: Source file '{source_filename}' not found.")
except Exception as e:
    print(f"An error occurred: {e}")