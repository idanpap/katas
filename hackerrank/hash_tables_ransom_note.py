def checkMagazine(magazine, note):
    magazine_dict = {}
    for i in magazine:
        magazine_dict[i] = magazine_dict.get(i, 0) + 1
    for elem in note:
        try:
            if magazine_dict[elem] != 0:
                magazine_dict[elem] -= 1
                data = "Yes"
            elif magazine_dict[elem] == 0:
                data = "No"
                break
        except:
            data = "No"
            break
    print(data)


checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'],
              ['give', 'one', 'grand', 'today'])
# Yes
# https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
