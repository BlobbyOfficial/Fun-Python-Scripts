import random
import string

def generate(length=12):
    chars = string.ascii_letters + string.digits + "!@#$%^&*()"
    return ''.join(random.choice(chars) for _ in range(length))

if __name__ == "__main__":
    try:
        length = int(input("Password length: "))
    except ValueError:
        length = 12
    print("Generated password:", generate(length))
