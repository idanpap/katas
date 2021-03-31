def sherlockAndAnagrams(s):
    n = len(s)
    count = 0
    for i in range(1, n):
        d = {}
        for j in range(n-i+1):
            subs = ''.join(sorted(s[j:j+i]))
            if subs not in d:
                d[subs] = 1
            else:
                d[subs] += 1

            count += d[subs]-1

    return count


print(sherlockAndAnagrams('mom'))
# 2
