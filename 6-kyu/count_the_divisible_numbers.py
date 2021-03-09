def divisible_count(x, y, k):
    if x % k == 0:
        return ((y // k) - (x//k)) + 1
    return ((y // k) - (x//k))


print(divisible_count(6, 11, 2))
# 3
# https://www.codewars.com/kata/55a5c82cd8e9baa49000004c/train/python
