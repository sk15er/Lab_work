// Program 13: Print the reverse of a non-negative number
#include <iostream>
using namespace std;

int main() {
    long long number;
    unsigned long long reversed = 0;
    cout << "Enter a non-negative integer: ";
    if (!(cin >> number) || number < 0) {
        cout << "Please enter a non-negative integer.\n";
        return 1;
    }

    do {
        reversed = reversed * 10 + static_cast<unsigned long long>(number % 10);
        number /= 10;
    } while (number > 0);

    cout << "Reverse = " << reversed << '\n';
    return 0;
}