/* Program 11: Print the Fibonacci series */
#include <stdio.h>

int main(void) {
    int count;
    unsigned long long first = 0, second = 1;

    printf("Enter the number of terms (0 to 94): ");
    if (scanf("%d", &count) != 1 || count < 0 || count > 94) {
        printf("Please enter a number from 0 to 94.\n");
        return 1;
    }

    for (int i = 0; i < count; ++i) {
        printf("%llu%s", first, i + 1 == count ? "\n" : " ");
        unsigned long long next = first + second;
        first = second;
        second = next;
    }

    return 0;
}