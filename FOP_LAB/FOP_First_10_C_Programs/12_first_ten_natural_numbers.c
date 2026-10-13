/* Program 12: Print the first ten natural numbers */
#include <stdio.h>

int main(void) {
    for (int number = 1; number <= 10; ++number)
        printf("%d%s", number, number == 10 ? "\n" : " ");
    return 0;
}