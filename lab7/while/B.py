num = int(input())
count = 2
while count < num:
    if num % count == 0:
        print(count)
        break
    else:
        count += 1