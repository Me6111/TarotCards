import os
from moviepy.editor import VideoFileClip

def convert_video_to_gif():
    # Get the current directory
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Define the input and output file paths
    input_file = os.path.join(current_dir, '1.mp4')
    output_file = os.path.join(current_dir, '1.gif')
    
    # Load the video file
    video = VideoFileClip(input_file)
    
    # Convert to GIF and save
    video.write_gif(output_file, fps=24)
    
    print(f"Conversion complete. GIF saved as {output_file}")

if __name__ == "__main__":
    convert_video_to_gif()