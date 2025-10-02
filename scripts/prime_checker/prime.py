def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

if __name__ == "__main__":
    try:
        n = int(input("Enter a number: "))
        if is_prime(n):
            print("Prime!")
        else:
            print("Not prime.")
    except ValueError:
        print("Please enter a valid integer.")
