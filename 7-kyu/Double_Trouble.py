def trouble(x, t):
    i = 0
    while i < len(x)-1:
        if (x[i] + x[i+1]) == t:
            x.pop(i + 1)
        else:
            i += 1
    return x


print(trouble([4, 1, 1, 1, 4], 2))
# [4,1,4]
# https://www.codewars.com/kata/57f7796697d62fc93d0001b8/train/python
