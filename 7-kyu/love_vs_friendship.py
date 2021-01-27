def words_to_marks(s):
    total = 0
    for letter in s:
        total += (ord(letter) - 96)
    return total


print(words_to_marks('attitude'))

#  100
# https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/python
