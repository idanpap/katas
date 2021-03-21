def twoStrings(s1, s2):
    new_dict = {}
    for i in s1:
        new_dict[i] = new_dict.get(i, 0) + 1
    for j in s2:
        try:
            if new_dict[j] > 0:
                data = "Yes"
                break
            elif new_dict[j] == 0:
                data = "No"
                break
        except:
            data = "No"
    print(data)


twoStrings('hello', 'world')
# Yes
twoStrings('hi', 'world')
# No
# https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
