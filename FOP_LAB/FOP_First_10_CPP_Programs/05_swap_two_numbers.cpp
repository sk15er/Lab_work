// Program 5: Swap two numbers
#include <iostream>
using namespace std;
int main() {
    double a, b;
    cout << "Enter two numbers: ";
    if (!(cin >> a >> b)) {
        cout << "Invalid input.\n";
        return 1;
    }
    double temp = a;
    a = b;
    b = temp;
    cout << "After swapping: a = " << a << ", b = " << b << '\n';
    return 0;
}
