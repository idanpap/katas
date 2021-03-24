def solution(stones):
    count = 0
    for i in range(len(stones)-1):
        if stones[i+1] == stones[i]:
            count += 1
    return count


print(solution("RRRRGGGGBBBB"))
#  9
# https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a/train/python
