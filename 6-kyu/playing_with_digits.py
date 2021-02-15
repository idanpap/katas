def dig_pow(n, p):
    num_string = str(n)
    total = 0
    for number in num_string:
        total += int(number)**p
        p += 1
    if total % n == 0:
        return total // n
    return -1


print(dig_pow(46288, 3))
#  51
# https://www.codewars.com/kata/5552101f47fc5178b1000050/train/python
