/* Program 2: Add two numbers */
#include <stdio.h>

int main(void) {
    double a, b;
    printf("Enter two numbers: ");
    if (scanf("%lf %lf", &a, &b) != 2) {
        printf("Invalid input.\n");
        return 1;
    }

    printf("Sum = %.2f\n", a + b);
    return 0;
}
