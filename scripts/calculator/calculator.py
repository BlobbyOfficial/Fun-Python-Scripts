def calc():
    print("Simple Calculator. Type 'quit' to exit.")
    while True:
        expr = input("Enter expression: ")
        if expr.strip().lower() == "quit":
            break
        try:
            result = eval(expr, {"__builtins__": {}})
            print("Result:", result)
        except Exception as e:
            print("Error:", e)

if __name__ == "__main__":
    calc()
