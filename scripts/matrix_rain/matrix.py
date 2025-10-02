import random
import os
import time
import sys

# Matrix Rain: Simulates green falling numbers like in The Matrix

def main():
    try:
        cols = os.get_terminal_size().columns
    except OSError:
        cols = 80
    drops = [0] * cols
    try:
        while True:
            line = []
            for i in range(cols):
                if random.random() > 0.98:
                    drops[i] = 1
                if drops[i] > 0:
                    line.append(str(random.randint(0, 9)))
                    drops[i] += 1
                    if drops[i] > random.randint(3, 15):
                        drops[i] = 0
                else:
                    line.append(" ")
            print("".join(line))
            time.sleep(0.06)
    except KeyboardInterrupt:
        sys.exit()

if __name__ == "__main__":
    main()
