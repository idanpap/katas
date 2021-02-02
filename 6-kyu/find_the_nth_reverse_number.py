r = [0] * 1000000


def f(p=1, zero=False):
    if p == 1:
        for i in range(0 if zero else 1, 10):
            yield str(i)
        return
    if p == 2:
        if zero:
            yield '00'
        for i in range(1, 10):
            yield str(i * 11)
        return
    for i in range(0 if zero else 1, 10):
        for j in f(p-2, zero=True):
            yield str(i) + str(j) + str(i)


t = 1
p = 1
while t < 1000000:
    for i in f(p, False):
        r[t] = int(i)
        t += 1
        if t == 1000000:
            break
    p += 1


def find_reverse_number(n):
    return r[n-1]


print(find_reverse_number(1000000))
# 90000000009
# https://www.codewars.com/kata/600bfda8a4982600271d6069/train/python
