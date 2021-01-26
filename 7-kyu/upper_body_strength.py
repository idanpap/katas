def alex_mistakes(number_of_katas, time_limit):
    time_left = time_limit-(6*number_of_katas)
    mistakes = 1

    def mistake_time(mistakes, time_left):
        mistake_step = 5*(2**(mistakes-1))
        if time_left < mistake_step:
            return 0
        else:
            return 1+mistake_time(mistakes+1, time_left-mistake_step)

    return mistake_time(mistakes, time_left)


print(alex_mistakes(8, 120))
#  3

# print(alex_mistakes(9, 180))
#  4
# print(alex_mistakes(10, 120))
#   3)
