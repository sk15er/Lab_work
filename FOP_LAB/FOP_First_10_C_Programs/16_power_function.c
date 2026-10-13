/* Program 16: Calculate a raised to the power b with a function */
#include <stdio.h>

static double power(double base, int exponent) {
    long long steps = exponent;
    double result = 1.0;
    if (steps < 0) {
        base = 1.0 / base;
        steps = -steps;
    }
    while (steps-- > 0)
        result *= base;
    return result;
}

int main(void) {
    double base;
    int exponent;
    printf("Enter the base and integer exponent: ");
    if (scanf("%lf %d", &base, &exponent) != 2 || (base == 0 && exponent < 0)) {
        printf("Invalid input. Zero cannot have a negative exponent.\n");
        return 1;
    }
    printf("%.6g^%d = %.10g\n", base, exponent, power(base, exponent));
    return 0;
}