#include <iostream>
using namespace std;

float find_sum_recursively(float numbers[], int size)
{
    if (size == 1)
        return numbers[0];
    return numbers[size - 1] + find_sum_recursively(numbers, size - 1);
}

float find_sum_iteratively(float numbers[], int size)
{
    float sum = 0.0f;
    for (int i = 0; i < size; i++)
        sum += numbers[i];
    return sum;
}

int main()
{
    float numbers[] = {3.5f, 55.2f, 10.9f, 9.09f};
    float sum = find_sum_recursively(numbers, sizeof(numbers) / sizeof(float));
    cout << "Sum = " << sum << endl;
}