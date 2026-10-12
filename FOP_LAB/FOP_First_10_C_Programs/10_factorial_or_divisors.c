/* Program 10: Calculate factorial OR print positive divisors */
#include <stdio.h>

int main(void) {
    int choice;
    printf("Choose an option:\n");
    printf("1. Calculate factorial\n");
    printf("2. Print positive divisors\n");
    printf("Enter choice (1 or 2): ");

    if (scanf("%d", &choice) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    if (choice == 1) {
        int n, i;
        unsigned long long factorial = 1;

        printf("Enter a non-negative integer (0 to 20): ");
        if (scanf("%d", &n) != 1 || n < 0 || n > 20) {
            printf("Please enter an integer from 0 to 20.\n");
            return 1;
        }

        for (i = 2; i <= n; i++)
            factorial *= (unsigned long long)i;

        printf("%d! = %llu\n", n, factorial);
    } else if (choice == 2) {
        int n, i;
        printf("Enter a positive integer: ");
        if (scanf("%d", &n) != 1 || n <= 0) {
            printf("Please enter a positive integer.\n");
            return 1;
        }

        printf("Positive divisors of %d: ", n);
        for (i = 1; i <= n; i++) {
            if (n % i == 0)
                printf("%d ", i);
        }
        printf("\n");
    } else {
        printf("Invalid choice.\n");
    }

    return 0;
}
