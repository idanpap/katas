import re
from collections import Counter


def top_3_words(text):
    word_count = Counter(re.findall(
        r'([a-z][a-z\']*|[a-z\']*[a-z])', text.lower()))
    return [word for word, count in word_count.most_common(3)]


# print(top_3_words("""In a village of La Mancha, the name of which I have no desire to call to
# mind, there lived not long since one of those gentlemen that keep a lance
# in the lance-rack, an old buckler, a lean hack, and a greyhound for
# coursing. An olla of rather more beef than mutton, a salad on most
# nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
# on Sundays, made away with three-quarters of his income."""))
# ["a", "of", "on"]
# https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/python
print(top_3_words("a a a  b  c c  d d d d  e e e e e"))
# This is my first attempt at Regular Expressions and I did use quite a lot of info from online sources.
