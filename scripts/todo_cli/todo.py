def main():
    todos = []
    while True:
        cmd = input("Add/Show/Remove/Quit: ").strip().lower()
        if cmd == "add":
            item = input("Todo: ")
            todos.append(item)
        elif cmd == "show":
            for i, todo in enumerate(todos, 1):
                print(f"{i}. {todo}")
        elif cmd == "remove":
            idx = int(input("Number to remove: ")) - 1
            if 0 <= idx < len(todos):
                todos.pop(idx)
            else:
                print("Invalid number.")
        elif cmd == "quit":
            break
        else:
            print("Unknown command.")

if __name__ == "__main__":
    main()
