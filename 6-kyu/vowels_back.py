def vowel_back(st):
    new_str = ""
    for letter in st:
        if letter == "a" or letter == "i" or letter == "u":
            new_letter_num = ord(letter) - 5
            if new_letter_num < 97:
                new_letter_num = new_letter_num + 26
        elif letter == "o" or letter == "c":
            new_letter_num = ord(letter) - 1
        elif letter == "e":
            new_letter_num = ord(letter) - 4
        elif letter == "d":
            new_letter_num = ord(letter) - 3
        else:
            new_letter_num = ord(letter) + 9
            if new_letter_num > 122:
                new_letter_num = new_letter_num - 26
        if chr(new_letter_num) == 'c' or chr(new_letter_num) == 'o' or chr(new_letter_num) == 'd' or chr(new_letter_num) == 'e':
            new_str += letter
        else:
            new_str += chr(new_letter_num)
    return new_str


print(vowel_back("codewars"))
#  "bnaafvab"
# https://www.codewars.com/kata/57cfd92c05c1864df2001563/train/python
