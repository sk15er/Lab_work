/* Program 5: Swap the values of two numbers */
#include <stdio.h>

int main(void) {
    double a, b, temp;
    printf("Enter two numbers: ");
    if (scanf("%lf %lf", &a, &b) != 2) {
        printf("Invalid input.\n");
        return 1;
    }

    printf("Before swapping: a = %.2f, b = %.2f\n", a, b);
    temp = a;
    a = b;
    b = temp;
    printf("After swapping:  a = %.2f, b = %.2f\n", a, b);
    return 0;
}
