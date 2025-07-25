def partition_list1(numbers):
    pivot = numbers[-1]
    j = 0
    for i in range(len(numbers)-1):
        if numbers[i] < pivot:
            numbers[i], numbers[j] = numbers[j], numbers[i]
            j += 1
    numbers[-1], numbers[j] = numbers[j], numbers[-1]

def partition_list(numbers, low, high):
    pivot = numbers[high]
    j = low
    for i in range(low, high):
        if numbers[i] < pivot:
            numbers[i], numbers[j] = numbers[j], numbers[i]
            j += 1
    numbers[high], numbers[j] = numbers[j], numbers[high]
    print(numbers)
    return j