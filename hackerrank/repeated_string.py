def repeatedString(s, n):
    extra = 0
    if n % len(s) > 0:
        extra += s[:(n % len(s))].count('a')
    return (n // len(s))*s.count('a') + extra


print(repeatedString('aba', 10))
# 7
# https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
