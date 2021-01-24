class Node():
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


def stringify(node):
    if node == None:
        return "None"
    if node.next is None:
        return str(node.data) + " -> None"
    total_str = ""
    while node.next is not None:
        total_str = total_str + str(node.data) + " -> "
        node = node.next
    total_str = total_str + str(node.data) + " -> None"
    return total_str


# print(stringify(Node(0, Node(1, Node(4, Node(9, Node(16)))))))
#  '0 -> 1 -> 4 -> 9 -> 16 -> None'

print(stringify(Node(4, Node(25))))
# , '4 -> 25 -> None')
# https://www.codewars.com/kata/582c297e56373f0426000098/train/python
