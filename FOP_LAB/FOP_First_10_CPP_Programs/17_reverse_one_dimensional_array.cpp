// Program 17: Print a one-dimensional array of ten numbers in reverse
#include <iostream>
using namespace std;

int main() {
    int numbers[10];
    cout << "Enter 10 integers: ";
    for (int i = 0; i < 10; ++i) {
        if (!(cin >> numbers[i])) {
            cout << "Invalid input.\n";
            return 1;
        }
    }

    for (int i = 9; i >= 0; --i)
        cout << numbers[i] << (i == 0 ? '\n' : ' ');
    return 0;
}