// Program 6: Gross salary = basic salary + HRA + DA (assumed formula)
#include <iostream>
using namespace std;
int main() {
    double basic, hra, da;
    cout << "Enter basic salary, HRA, and DA: ";
    cin >> basic >> hra >> da;
    cout << "Gross salary = " << basic + hra + da << '\n';
    return 0;
}
