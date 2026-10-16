// Program 7: Check even or odd
#include <iostream>
using namespace std;
int main() {
    long long number;
    cout << "Enter an integer: ";
    if (!(cin >> number)) {
        cout << "Invalid input.\n";
        return 1;
    }
    if (number % 2 == 0) cout << "Even\n";
    else cout << "Odd\n";
    return 0;
}
