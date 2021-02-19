class RomanNumerals:
    @staticmethod
    def from_roman(n):
        rom_val = {'I': 1, 'V': 5, 'X': 10,
                   'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        int_val = 0
        for i in range(len(n)):
            if i > 0 and rom_val[n[i]] > rom_val[n[i - 1]]:
                int_val += rom_val[n[i]] - 2 * rom_val[n[i - 1]]
            else:
                int_val += rom_val[n[i]]
        return int_val

    @staticmethod
    def to_roman(n):
        roman_string = ''
        while n >= 1000:
            roman_string += 'M'
            n -= 1000
        while n >= 900:
            roman_string += 'CM'
            n -= 900
        while n >= 500:
            roman_string += 'D'
            n -= 500
        while n >= 400:
            roman_string += 'CD'
            n -= 400
        while n >= 100:
            roman_string += 'C'
            n -= 100
        while n >= 90:
            roman_string += 'XC'
            n -= 90
        while n >= 50:
            roman_string += 'L'
            n -= 50
        while n >= 40:
            roman_string += 'XL'
            n -= 40
        while n >= 10:
            roman_string += 'X'
            n -= 10
        while n >= 9:
            roman_string += 'IX'
            n -= 9
        while n >= 5:
            roman_string += 'V'
            n -= 5
        while n >= 4:
            roman_string += 'IV'
            n -= 4
        while n >= 1:
            roman_string += 'I'
            n -= 1
        return roman_string


print(RomanNumerals.to_roman(1990))
#  'MCMXC', '1990 should == "MCMXC"')
print(RomanNumerals.from_roman('MMVIII'))
#  2008, 'MMVIII should == 2008'
# https://www.codewars.com/kata/51b66044bce5799a7f000003/train/python
