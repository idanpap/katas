def factorial(n):
    if n < 0:
        return None
    elif n == 0:
        return 1
    else:
        return n*factorial(n-1)


print(factorial(5))
#  120
# https://www.codewars.com/kata/528e95af53dcdb40b5000171/train/python
