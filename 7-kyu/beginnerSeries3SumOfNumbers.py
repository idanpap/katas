def get_sum(a, b):
    sum = 0
    if a < b:
        start = a
        end = b
    else:
        start = b
        end = a
    for i in range(start, end + 1):
        sum = sum + i
    return sum


print(get_sum(1, 2))
# ,1
# https://www.codewars.com/kata/55f2b110f61eb01779000053/train/python
