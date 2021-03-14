def jumpingOnClouds(c):
    i = 0
    total = 0
    while i < len(c) - 1:
        if i + 2 < len(c):
            if c[i+2] != 1:
                i += 2
                total += 1
            else:
                total += 1
                i += 1
        else:
            total += 1
            i += 1
    return total


print(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))
# 3
# https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
