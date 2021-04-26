def part(arr):
    terms = ['Partridge',
             'PearTree',
             'Chat',
             'Dan',
             'Toblerone',
             'Lynn',
             'AlphaPapa',
             'Nomad']
    count = 0
    for term in arr:
        if term in terms:
            count += 1
    if count > 0:
        phrase = "Mine's a Pint"
        for i in range(count):
            phrase += '!'
        return phrase
    return "Lynn, I've pierced my foot on a spike!!"


print(part(["Grouse", "Partridge", "Pheasant", "Goose", "Starling", "Robin", "Thrush", "Emu", "PearTree", "Chat",
            "Dan", "Square", "Toblerone", "Lynn", "AlphaPapa", "BMW", "Graham", "Tool", "Nomad", "Finger", "Hamster"]))
#  "Mine's a Pint!!!!!!!!"
# https://www.codewars.com/kata/5808c8eff0ed4210de000008/train/python
