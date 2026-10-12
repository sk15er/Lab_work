// Program 10: Factorial or positive divisors
#include <iostream>
using namespace std;
int main() {
    int choice;
    cout << "1. Factorial\\n2. Positive divisors\\nChoose: ";
    cin >> choice;
    if (choice == 1) {
        int n;
        cout << "Enter a non-negative integer (0 to 20): ";
        cin >> n;
        if (n < 0 || n > 20) { cout << "Out of range\\n"; return 0; }
        unsigned long long result = 1;
        for (int i = 2; i <= n; ++i) result *= static_cast<unsigned long long>(i);
        cout << n << "! = " << result << '\n';
    } else if (choice == 2) {
        int n;
        cout << "Enter a positive integer: ";
        cin >> n;
        if (n <= 0) { cout << "Enter a positive integer\\n"; return 0; }
        for (int i = 1; i <= n; ++i) if (n % i == 0) cout << i << ' ';
        cout << '\n';
    } else cout << "Invalid choice\\n";
    return 0;
}
