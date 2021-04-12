def nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth):
    total_balance = 0
    months = 0
    if startPriceOld >= startPriceNew:
        return [0, int(startPriceOld-startPriceNew)]
    while total_balance + startPriceOld < startPriceNew:
        months += 1
        if months % 2 == 0 and months > 0:
            percentLossByMonth += 0.5
        startPriceOld = ((100-percentLossByMonth)/100)*startPriceOld
        startPriceNew = ((100-percentLossByMonth)/100)*startPriceNew
        total_balance += savingperMonth

    return [months, round(total_balance + startPriceOld-startPriceNew)]


print(nbMonths(2000, 8000, 1000, 1.5))
#  [6, 766]
