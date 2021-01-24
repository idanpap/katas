def sequence_sum(begin_number, end_number, step):
    total_sum = 0
    for x in range(begin_number, end_number + 1, step):
        total_sum += x
    return total_sum


print(sequence_sum(1, 5, 1))
# , 15

print(range(1, 7, 2))
