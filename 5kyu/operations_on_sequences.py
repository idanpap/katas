def solve(arr):
    a, b, c, d = arr[0:4]
    firstFour = [abs(a*c - b*d), (a*d+b*c)]
    if len(arr) == 4:
        return firstFour
    return solve(firstFour + arr[4:])


# print(solve([3, 9, 8, 4, 6, 8, 7, 8, 4, 8, 5, 6, 6, 4, 4, 5]))
# https://www.codewars.com/kata/5e4bb05b698ef0001e3344bc/train/python
