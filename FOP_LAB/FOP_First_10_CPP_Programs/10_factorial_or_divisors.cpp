// Program 10: Factorial or positive divisors
#include <iostream>
using namespace std;
int main() {
    int choice;
    cout << "1. Factorial\n2. Positive divisors\nChoose: ";
    if (!(cin >> choice)) {
        cout << "Invalid input.\n";
        return 1;
    }
    if (choice == 1) {
        int n;
        cout << "Enter a non-negative integer (0 to 20): ";
        if (!(cin >> n) || n < 0 || n > 20) {
            cout << "Enter an integer from 0 to 20.\n";
            return 1;
        }
        unsigned long long result = 1;
        for (int i = 2; i <= n; ++i) result *= static_cast<unsigned long long>(i);
        cout << n << "! = " << result << '\n';
    } else if (choice == 2) {
        int n;
        cout << "Enter a positive integer: ";
        if (!(cin >> n) || n <= 0) {
            cout << "Enter a positive integer.\n";
            return 1;
        }
        for (long long i = 1; i <= n; ++i) if (n % i == 0) cout << i << ' ';
        cout << '\n';
    } else {
        cout << "Invalid choice.\n";
    }
    return 0;
}
