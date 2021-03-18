def minimumSwaps(arr):
    swaps = 0

    for i in range(0, len(arr)-1):
        while arr[i] != i + 1:
            t = arr[arr[i] - 1]
            arr[arr[i] - 1] = arr[i]
            arr[i] = t
            swaps += 1

    print(swaps)


minimumSwaps([2, 3, 4, 1, 5])
# 3
# https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
