def race(v1, v2, g):
    if v2 <= v1:
        return None
    time = g/(v2-v1)
    return [int(time), int((time*60) % 60), int((time*3600) % 60)]


print(race(720, 850, 70))
#  [0, 32, 18]
# codewars.com/kata/55e2adece53b4cdcb900006c/train/python
