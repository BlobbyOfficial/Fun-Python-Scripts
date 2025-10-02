import random

def play():
    n = random.randint(1, 100)
    print("Guess a number between 1 and 100")
    tries = 0
    while True:
        tries += 1
        try:
            g = int(input("> "))
        except ValueError:
            print("Enter an integer.")
            continue
        if g < n:
            print("Too low")
        elif g > n:
            print("Too high")
        else:
            print(f"Correct! {n} in {tries} tries.")
            break

if __name__ == "__main__":
    while True:
        play()
        again = input("Play again? (y/n): ").strip().lower()
        if again != 'y':
            break
