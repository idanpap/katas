import math


def squares_needed(grains):
    if (grains == 0):
        return 0
    if (grains == 1):
        return 1
    return math.floor((math.log(grains, 2) + 1))


print(squares_needed(3))
#  3
# https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/train/python
