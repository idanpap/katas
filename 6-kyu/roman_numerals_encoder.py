def solution(n):
    roman_string = ''
    while n >= 1000:
        roman_string += 'M'
        n -= 1000
    while n >= 900:
        roman_string += 'CM'
        n -= 900
    while n >= 500:
        roman_string += 'D'
        n -= 500
    while n >= 400:
        roman_string += 'CD'
        n -= 400
    while n >= 100:
        roman_string += 'C'
        n -= 100
    while n >= 90:
        roman_string += 'XC'
        n -= 90
    while n >= 50:
        roman_string += 'L'
        n -= 50
    while n >= 40:
        roman_string += 'XL'
        n -= 40
    while n >= 10:
        roman_string += 'X'
        n -= 10
    while n >= 9:
        roman_string += 'IX'
        n -= 9
    while n >= 5:
        roman_string += 'V'
        n -= 5
    while n >= 4:
        roman_string += 'IV'
        n -= 4
    while n >= 1:
        roman_string += 'I'
        n -= 1
    return roman_string


print(solution(1889))
# ,'MDCCCLXXXIX', "solution(1889),'MDCCCLXXXIX'"
# https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/python
