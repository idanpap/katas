def countingValleys(steps, path):
    path = list(path)
    at_sea_level = 0
    counter = 0
    for i in range(0, steps):
        if path[i] == "U":
            at_sea_level += 1
        else:
            at_sea_level -= 1
        if path[0] == 'U' and i == 1:
            continue

        if path[i] == 'U' and at_sea_level == 0:
            counter += 1
    return counter


print(countingValleys(8, 'UDDDUDUU'))
# 1
# https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
