
def replicate(times, number):
    if times <= 0:
        return []
    else:
        return [number] + replicate(times-1, number)


print(replicate(5, 1))
# , [1, 1, 1, 1, 1]
# https://www.codewars.com/kata/57547f9182655569ab0008c4/train/python
