/* Program 7: Check whether an integer is even or odd */
#include <stdio.h>

int main(void) {
    long long number;
    printf("Enter an integer: ");
    if (scanf("%lld", &number) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    if (number % 2 == 0)
        printf("%lld is even.\n", number);
    else
        printf("%lld is odd.\n", number);

    return 0;
}
