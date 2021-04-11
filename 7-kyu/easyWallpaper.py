import math


def wallpaper(l, w, h):
    if l == 0 or w == 0 or h == 0:
        return 'zero'
    numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
               "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    area = l*h*2+w*h*2
    wallpaper = 0.52*10
    # your code
    paper = math.ceil((area / wallpaper)*1.15)
    return(numbers[paper])


print(wallpaper(6.3, 5.8, 3.13))

#  "seventeen"
