def hourglassSum(arr):
    max_num = arr[0][0]+arr[0][1]+arr[0][2] + \
        arr[1][1]+arr[2][0]+arr[2][1]+arr[2][2]
    for i in range(len(arr)-2):
        for j in range(len(arr[i])-2):
            if (arr[i][j]+arr[i][j+1]+arr[i][j+2] + arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]) > max_num:
                max_num = arr[i][j]+arr[i][j+1]+arr[i][j+2] + \
                    arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]
    return max_num


print(hourglassSum([[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [
      0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]))
# 19
# https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
