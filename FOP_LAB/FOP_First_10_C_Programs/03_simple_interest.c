/* Program 3: Calculate simple interest */
#include <stdio.h>

int main(void) {
    double principal, rate, time, interest;
    printf("Enter principal, annual rate (%%), and time in years: ");
    if (scanf("%lf %lf %lf", &principal, &rate, &time) != 3) {
        printf("Invalid input.\n");
        return 1;
    }

    interest = principal * rate * time / 100.0;
    printf("Simple interest = %.2f\n", interest);
    printf("Total amount = %.2f\n", principal + interest);
    return 0;
}
