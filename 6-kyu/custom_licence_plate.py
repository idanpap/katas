def licence_plate(s):
    not_possible = 'not possible'
    if (len(s) < 2):
        return not_possible

    new_string = ''
    num_digits = 0

    for i in range(len(s)):
        if s[i].isdigit():
            new_string += s[i]
            num_digits += 1
        elif s[i].isalpha():
            new_string += s[i].upper()
        elif len(new_string) > 0 and new_string[-1] != '-':
            new_string += '-'
        if (i < len(s) - 1) and ((s[i].isdigit() and s[i + 1].isalpha()) or (s[i + 1].isdigit() and s[i].isalpha())):
            new_string += '-'
        if len(new_string) >= 8:
            break
    if num_digits == len(new_string) or len(new_string) < 2:
        return not_possible
    while new_string[-1] == '-':
        new_string = new_string[:-1]

    while new_string[0] == '-':
        new_string = new_string[1:]
    if num_digits == len(new_string) or len(new_string) < 2:
        return not_possible
    else:
        return new_string


print(licence_plate("1337"))
print(licence_plate("~c0d3w4rs~"))
print(licence_plate("_-=porsche><911=-_"))
#  "ANTER-69"
# https://www.codewars.com/kata/5bc64f48eba26e79df000031/train/python
