// Program 7: Check even or odd
#include <iostream>
using namespace std;
int main() {
    long long number;
    cout << "Enter an integer: ";
    cin >> number;
    if (number % 2 == 0) cout << "Even\n";
    else cout << "Odd\n";
    return 0;
}
