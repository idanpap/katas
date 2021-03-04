def solution(roman):
    rom_val = {'I': 1, 'V': 5, 'X': 10,
               'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    int_val = 0
    for i in range(len(roman)):
        if i > 0 and rom_val[roman[i]] > rom_val[roman[i - 1]]:
            int_val += rom_val[roman[i]] - 2 * rom_val[roman[i - 1]]
        else:
            int_val += rom_val[roman[i]]
    return int_val


print(solution('MDCLXVI'))
# , 1666, 'MDCLXVI should == 1666'
# https://www.codewars.com/kata/51b6249c4612257ac0000005/train/python
