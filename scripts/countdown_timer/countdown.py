import time

def countdown(seconds):
    for i in range(seconds, 0, -1):
        print(f"{i}...", end='', flush=True)
        time.sleep(1)
    print("Time's up!")

if __name__ == "__main__":
    try:
        secs = int(input("Enter seconds to count down: "))
        countdown(secs)
    except ValueError:
        print("Please enter a valid integer.")
