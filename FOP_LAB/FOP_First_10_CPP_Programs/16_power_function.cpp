// Program 16: Calculate a raised to the power b with a function
#include <iostream>
using namespace std;

double power(double base, int exponent) {
    long long steps = exponent;
    double result = 1.0;
    if (steps < 0) {
        base = 1.0 / base;
        steps = -steps;
    }
    while (steps-- > 0)
        result *= base;
    return result;
}

int main() {
    double base;
    int exponent;
    cout << "Enter the base and integer exponent: ";
    if (!(cin >> base >> exponent) || (base == 0 && exponent < 0)) {
        cout << "Invalid input. Zero cannot have a negative exponent.\n";
        return 1;
    }
    cout << base << '^' << exponent << " = " << power(base, exponent) << '\n';
    return 0;
}