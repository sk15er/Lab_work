/* Program 9: Find a student's grade from marks
   Example scale only; replace with your college's official scale if supplied. */
#include <stdio.h>

int main(void) {
    double marks;
    printf("Enter marks out of 100: ");
    if (scanf("%lf", &marks) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    if (marks < 0 || marks > 100)
        printf("Invalid marks. Enter a value from 0 to 100.\n");
    else if (marks >= 90)
        printf("Grade: A\n");
    else if (marks >= 80)
        printf("Grade: B\n");
    else if (marks >= 70)
        printf("Grade: C\n");
    else if (marks >= 60)
        printf("Grade: D\n");
    else if (marks >= 40)
        printf("Grade: E\n");
    else
        printf("Grade: F (Fail)\n");

    return 0;
}
