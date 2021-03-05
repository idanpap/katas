def how_many_times(a, b):
    if a == b:
        return a
    a, b = min(a, b), max(a, b)
    total = 0
    while a > 0:
        if b % a == 0:
            total += 1
        subtract = int(b / (int(b / a) + 1))
        print(subtract)
        a, b = subtract, b - (a - subtract)
    return total


print(how_many_times(654093782, 937618402))
#  2
# https: // www.codewars.com/kata/5f845fcf00f3180023b7af0a/train/python
