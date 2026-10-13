/* Program 17: Print a one-dimensional array of ten numbers in reverse */
#include <stdio.h>

int main(void) {
    int numbers[10];
    printf("Enter 10 integers: ");
    for (int i = 0; i < 10; ++i) {
        if (scanf("%d", &numbers[i]) != 1) {
            printf("Invalid input.\n");
            return 1;
        }
    }

    for (int i = 9; i >= 0; --i)
        printf("%d%s", numbers[i], i == 0 ? "\n" : " ");
    return 0;
}