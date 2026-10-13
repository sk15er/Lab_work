// Program 14: Print the multiplication table of a number
#include <iostream>
using namespace std;

int main() {
    int number;
    cout << "Enter a number: ";
    if (!(cin >> number)) {
        cout << "Invalid input.\n";
        return 1;
    }

    for (int multiplier = 1; multiplier <= 10; ++multiplier)
        cout << number << " x " << multiplier << " = " << number * multiplier << '\n';
    return 0;
}