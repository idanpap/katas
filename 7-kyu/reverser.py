from math import log10


def reverse(n):
    if n < 10:
        return n
    else:
        return n % 10 * 10 ** int(log10(n // 10) + 1) + reverse(n // 10)


print(reverse(1234))
# , 4321
# https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/train/python
