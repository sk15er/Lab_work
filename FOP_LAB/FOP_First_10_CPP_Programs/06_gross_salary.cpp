// Program 6: Gross salary = basic salary + HRA + DA (assumed formula)
#include <iostream>
using namespace std;
int main() {
    double basic, hra, da;
    cout << "Enter basic salary, HRA, and DA: ";
    if (!(cin >> basic >> hra >> da)) {
        cout << "Invalid input.\n";
        return 1;
    }
    cout << "Gross salary = " << basic + hra + da << '\n';
    return 0;
}
