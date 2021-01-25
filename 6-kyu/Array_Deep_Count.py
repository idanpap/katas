def deep_count(a):
    return len(a) + sum(deep_count(e) for e in a if isinstance(e, list))


print(deep_count([1, 2, [3, 4, [5]]]))
# , 4, "Expected 4"
# https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/python
