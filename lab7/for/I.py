num = int(input())
counter = 0

for i in range(1, num + 1):
    if num % i == 0:
        counter += 1

print(counter)