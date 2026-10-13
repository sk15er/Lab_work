/* Program 13: Print the reverse of a non-negative number */
#include <stdio.h>

int main(void) {
    long long number, reversed = 0;
    printf("Enter a non-negative integer: ");
    if (scanf("%lld", &number) != 1 || number < 0) {
        printf("Please enter a non-negative integer.\n");
        return 1;
    }

    do {
        reversed = reversed * 10 + number % 10;
        number /= 10;
    } while (number > 0);

    printf("Reverse = %lld\n", reversed);
    return 0;
}