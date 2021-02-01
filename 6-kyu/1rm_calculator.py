def calculate_1RM(w, r):
    if r == 1:
        return w
    if r == 0:
        return 0

    arr = []
    Epley = w*(1 + (r/30))
    mcGlothin = (100*w)/(101.3 - (2.67123*r))
    Lombardi = w * (r ** 0.10)
    arr.append(round(Epley))
    arr.append(round(mcGlothin))
    arr.append(round(Lombardi))

    return max(arr)


print(calculate_1RM(135, 20))
# 282
# https://www.codewars.com/kata/595bbea8a930ac0b91000130/train/python
