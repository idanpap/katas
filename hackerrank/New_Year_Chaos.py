def minimumBribes(q):
    bribes = 0
    for i in range(len(q)-1, -1, -1):
        if q[i] - (i + 1) > 2:
            return'Too chaotic'

        for j in range(max(0, q[i] - 2), i):
            if q[j] > q[i]:
                bribes += 1
    return bribes


print(minimumBribes([2, 1, 5, 3, 4]))
# 3
print(minimumBribes([2, 5, 1, 3, 4]))
# toochaotic
# https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
