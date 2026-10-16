// Program 9: Example grade scale; change to your college's official scale
#include <iostream>
using namespace std;
int main() {
    double marks;
    cout << "Enter marks out of 100: ";
    if (!(cin >> marks)) {
        cout << "Invalid input.\n";
        return 1;
    }
    if (marks < 0 || marks > 100) cout << "Invalid marks\n";
    else if (marks >= 90) cout << "Grade: A\n";
    else if (marks >= 80) cout << "Grade: B\n";
    else if (marks >= 70) cout << "Grade: C\n";
    else if (marks >= 60) cout << "Grade: D\n";
    else if (marks >= 40) cout << "Grade: E\n";
    else cout << "Grade: F (Fail)\n";
    return 0;
}
