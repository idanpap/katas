def make_a_window(num):
    string = ""
    for i in range(num*2 + 3):
        string += "-"
    string += "\n"
    for i in range(num*2 + 1):
        for j in range(num*2 + 3):
            if j == 0 or j == num*2 + 2:
                string += "|"
            elif i == num:
                if j == num + 1:
                    string += "+"
                else:
                    string += "-"
            else:
                if j == num + 1:
                    string += "|"
                else:
                    string += "."
        string += "\n"
    for i in range(num*2 + 3):
        string += "-"
    return string


print(make_a_window(3))
#  "---------\n|...|...|\n|...|...|\n|...|...|\n|---+---|\n|...|...|\n|...|...|\n|...|...|\n---------"
# https://www.codewars.com/kata/59c03f175fb13337df00002e/train/python
