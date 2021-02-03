def make_chocolates(small, big, goal):
    if goal % 5 == 0 and goal // 5 <= big:
        return 0
    remaining = goal
    counter = 0

    while remaining - 5 >= 2 and big > 0:
        if (remaining - 5 < 5 or big == 1) and (remaining - 5) % 2 != 0:
            break
        remaining -= 5
        big -= 1
    while remaining > 0 and small > 0:
        remaining -= 2
        counter += 1
        small -= 1
    if remaining != 0:
        return -1
    return counter


print(make_chocolates(191, 12, 299))
# 122
print(make_chocolates(3, 1000, 5004))
#  2
# https://www.codewars.com/kata/5f5daf1a209a64001183af9b/train/python
