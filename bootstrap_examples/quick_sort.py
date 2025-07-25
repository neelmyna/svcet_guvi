from partition import partition_list as partition

def quick_sort(numbers, low, high):
    if low < high: # if list has at least 2 elements
        pivot_index = partition(numbers, low, high)
        quick_sort(numbers, low, pivot_index-1)
        quick_sort(numbers, pivot_index+1, high)

numbers = [71, 13, 29, 3, 7, 2, 23, 17, 13, 31, 41, 37, 5]
print(numbers)
quick_sort(numbers, 0, len(numbers)-1)
print(numbers)