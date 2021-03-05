def nb_year(p0, percent, aug, p):
    print(p0, percent, aug, p)
    num_years = 0
    while p0 < p:
        p0 = p0 + ((p0*percent)//100) + aug
        num_years += 1
    return num_years


print(nb_year(1500000, 2.5, 10000, 2000000))
#  10
# https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/python
