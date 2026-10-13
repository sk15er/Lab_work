/* Program 15: Find the grade of a list of students */
#include <stdio.h>

static char grade_for(int marks) {
    if (marks >= 90) return 'A';
    if (marks >= 75) return 'B';
    if (marks >= 60) return 'C';
    if (marks >= 40) return 'D';
    return 'F';
}

int main(void) {
    int count, marks;
    printf("Enter the number of students: ");
    if (scanf("%d", &count) != 1 || count < 1) {
        printf("Enter at least one student.\n");
        return 1;
    }

    for (int student = 1; student <= count; ++student) {
        printf("Enter marks for student %d: ", student);
        if (scanf("%d", &marks) != 1 || marks < 0 || marks > 100) {
            printf("Marks must be between 0 and 100.\n");
            return 1;
        }
        printf("Student %d: Grade %c\n", student, grade_for(marks));
    }
    return 0;
}