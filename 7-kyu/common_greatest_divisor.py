def mygcd(x, y):
    if x % y == 0:
        return y
    elif y % x == 0:
        return x
    else:
        return mygcd(y, x % y)

# mygcd(30,12),6
# https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/python
