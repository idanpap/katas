def to_float_array(arr):
    new_array = []
    for number in arr:
        if isinstance(number, float) or isinstance(number, int):
            new_array.append(number)
        else:
            if '.' in number:
                new_array.append(float(number))
            else:
                new_array.append(int(number))
    return new_array


print(to_float_array(["1.1", "2.2", "3.3"]))
#  [1.1, 2.2, 3.3]
# https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/python

if type(2.2) == "<class 'float'>":
    print("yes")
print(type(2.2))
