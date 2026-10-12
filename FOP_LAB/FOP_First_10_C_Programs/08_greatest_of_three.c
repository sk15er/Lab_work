/* Program 8: Find the greatest of three numbers */
#include <stdio.h>

int main(void) {
    double a, b, c, greatest;
    printf("Enter three numbers: ");
    if (scanf("%lf %lf %lf", &a, &b, &c) != 3) {
        printf("Invalid input.\n");
        return 1;
    }

    greatest = a;
    if (b > greatest)
        greatest = b;
    if (c > greatest)
        greatest = c;

    printf("Greatest number = %.2f\n", greatest);
    return 0;
}
