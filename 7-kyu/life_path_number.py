def life_path_number(birthdate):
    if len(birthdate) == 1:
        return int(birthdate)
    else:
        new_string = ''
        for i in range(len(birthdate)):
            if birthdate[i] != '-':
                new_string += birthdate[i]
        sumTwo = int(new_string[0]) + int(new_string[1])
        return life_path_number(str(sumTwo) + new_string[2:])


print(life_path_number("1955-10-28"))
# , 4
# https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0/train/python
