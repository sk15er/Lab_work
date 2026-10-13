/* Program 14: Print the multiplication table of a number */
#include <stdio.h>

int main(void) {
    int number;
    printf("Enter a number: ");
    if (scanf("%d", &number) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    for (int multiplier = 1; multiplier <= 10; ++multiplier)
        printf("%d x %d = %d\n", number, multiplier, number * multiplier);
    return 0;
}