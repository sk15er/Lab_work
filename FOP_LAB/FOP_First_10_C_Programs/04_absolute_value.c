/* Program 4: Find the absolute value of a number */
#include <stdio.h>
#include <math.h>

int main(void) {
    double number;
    printf("Enter a number: ");
    if (scanf("%lf", &number) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    printf("Absolute value = %.2f\n", fabs(number));
    return 0;
}
