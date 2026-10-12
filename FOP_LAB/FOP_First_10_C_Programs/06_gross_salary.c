/* Program 6: Calculate gross salary
   Assumption: gross salary = basic salary + HRA + DA.
   Follow your instructor's formula if it differs. */
#include <stdio.h>

int main(void) {
    double basic, hra, da;
    printf("Enter basic salary, HRA, and DA: ");
    if (scanf("%lf %lf %lf", &basic, &hra, &da) != 3) {
        printf("Invalid input.\n");
        return 1;
    }

    printf("Gross salary = %.2f\n", basic + hra + da);
    return 0;
}
