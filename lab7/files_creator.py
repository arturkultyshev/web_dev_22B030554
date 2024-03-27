import os

directory = r"C:\Users\user\Desktop\web_dev_22B030554\lab7\functions"

letters = ['A', 'B', 'C']

for letter in letters:
    filename = f"{letter}.py"
    with open(os.path.join(directory, filename), 'w') as file:
        file.write('')
