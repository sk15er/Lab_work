// Program 4: Find absolute value
#include <iostream>
#include <cmath>
using namespace std;
int main() {
    double number;
    cout << "Enter a number: ";
    if (!(cin >> number)) {
        cout << "Invalid input.\n";
        return 1;
    }
    cout << "Absolute value = " << fabs(number) << '\n';
    return 0;
}
