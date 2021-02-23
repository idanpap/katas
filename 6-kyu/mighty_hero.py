import math


def count_of_heads(initial, n, swings):
    total = initial - swings
    while swings > 0:
        total += math.factorial(swings) * n
        swings -= 1
    return total


print(count_of_heads(5, 10, 3))
#  92
# https://www.codewars.com/kata/5e2aec959bce5c001f090c4d/train/python
