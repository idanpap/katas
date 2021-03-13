def rotLeft(a, d):
    new_arr = []
    for i in range(d, len(a)):
        new_arr.append(a[i])
    for i in range(0, d):
        new_arr.append(a[i])
    return new_arr


print(rotLeft([1, 2, 3, 4, 5], 4))
# [5,1,2,3,4,5]
# https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
