def potatoes(p0, w0, p1):
    dry_matter = ((100-p0)/100)*w0
    dry_matter_perc = 100-p1
    return int((dry_matter*100)//dry_matter_perc)


print(potatoes(82, 127, 80))
# 114
# https://www.codewars.com/kata/58ce8725c835848ad6000007/train/python
