// Program 11: Print the Fibonacci series
#include <iostream>
using namespace std;

int main() {
    int count;
    unsigned long long first = 0, second = 1;

    cout << "Enter the number of terms (0 to 94): ";
    if (!(cin >> count) || count < 0 || count > 94) {
        cout << "Please enter a number from 0 to 94.\n";
        return 1;
    }

    for (int i = 0; i < count; ++i) {
        cout << first << (i + 1 == count ? '\n' : ' ');
        unsigned long long next = first + second;
        first = second;
        second = next;
    }

    return 0;
}