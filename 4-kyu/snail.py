import copy


def snail(snail_map):
    arr = []
    newArr = copy.deepcopy(snail_map)
    num = len(snail_map)
    while len(arr) < num**2:
        for element in newArr[0]:
            arr.append(element)
        newArr = newArr[1:]
        if len(newArr) == 0:
            break
        for i in range(len(newArr)):
            arr.append(newArr[i].pop())
        if len(newArr) == 0:
            break
        for i in range(len(newArr[len(newArr) - 1])-1, -1, -1):
            arr.append(newArr[len(newArr) - 1][i])
        if len(newArr) == 0:
            break
        newArr.pop()
        if len(newArr) == 0:
            break
        for i in range(len(newArr) - 1, -1, -1):
            arr.append(newArr[i].pop(0))
        if len(newArr) == 0:
            break
    return arr


array = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]]


print(snail(array))
# [1, 2, 3, 6, 9, 8, 7, 4, 5]
# https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/python
