def rot13(message):
    arr = [char for char in message]
    new_array = []
    for char in arr:
        if (ord(char) >= 65 and ord(char) <= 90) or (ord(char) >= 97 and ord(char) <= 122):
            if char.upper() == char:
                if ord(char)+13 > 90:
                    new_array.append(chr(ord(char)-13))
                else:
                    new_array.append(chr(ord(char)+13))
            else:
                if ord(char)+13 > 122:
                    new_array.append(chr(ord(char)-13))
                else:
                    new_array.append(chr(ord(char)+13))
        else:
            new_array.append(char)

    return "".join(new_array)


print(rot13("Test"))
#  "grfg")
# https://www.codewars.com/kata/530e15517bc88ac656000716/train/python
# https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/python
