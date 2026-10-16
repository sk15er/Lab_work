// Program 2: Add two numbers
#include <iostream>
using namespace std;
int main() {
    double a, b;
    cout << "Enter two numbers: ";
    if (!(cin >> a >> b)) {
        cout << "Invalid input.\n";
        return 1;
    }
    cout << "Sum = " << a + b << '\n';
    return 0;
}
