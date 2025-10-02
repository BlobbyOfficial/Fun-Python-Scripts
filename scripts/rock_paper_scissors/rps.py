import random

choices = ['rock', 'paper', 'scissors']

def winner(player, computer):
    if player == computer:
        return "It's a tie!"
    if (player == 'rock' and computer == 'scissors') or \
       (player == 'scissors' and computer == 'paper') or \
       (player == 'paper' and computer == 'rock'):
        return "You win!"
    return "You lose!"

if __name__ == "__main__":
    while True:
        player = input("Rock, paper, or scissors? ").strip().lower()
        if player not in choices:
            print("Invalid choice.")
            continue
        computer = random.choice(choices)
        print(f"Computer chose: {computer}")
        print(winner(player, computer))
        again = input("Play again? (y/n): ").strip().lower()
        if again != 'y':
            break
