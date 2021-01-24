def beggars(values, n):
    return [sum(values[i::n]) for i in range(n)]


print(beggars([1, 2, 3, 4, 5], 2))
# [9,6]
