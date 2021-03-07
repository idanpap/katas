def descending_order(num):
    return int(''.join(sorted(list(str(num)), reverse=True)))


print(descending_order(123456789))
#  987654321
# https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python
