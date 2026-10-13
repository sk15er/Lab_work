// Program 15: Find the grade of a list of students
#include <iostream>
using namespace std;

char grade_for(int marks) {
    if (marks >= 90) return 'A';
    if (marks >= 75) return 'B';
    if (marks >= 60) return 'C';
    if (marks >= 40) return 'D';
    return 'F';
}

int main() {
    int count, marks;
    cout << "Enter the number of students: ";
    if (!(cin >> count) || count < 1) {
        cout << "Enter at least one student.\n";
        return 1;
    }

    for (int student = 1; student <= count; ++student) {
        cout << "Enter marks for student " << student << ": ";
        if (!(cin >> marks) || marks < 0 || marks > 100) {
            cout << "Marks must be between 0 and 100.\n";
            return 1;
        }
        cout << "Student " << student << ": Grade " << grade_for(marks) << '\n';
    }
    return 0;
}