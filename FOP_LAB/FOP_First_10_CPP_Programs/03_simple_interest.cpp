// Program 3: Calculate simple interest
#include <iostream>
using namespace std;
int main() {
    double principal, rate, time;
    cout << "Enter principal, annual rate (%), and time (years): ";
    if (!(cin >> principal >> rate >> time)) {
        cout << "Invalid input.\n";
        return 1;
    }
    double interest = principal * rate * time / 100.0;
    cout << "Simple interest = " << interest << '\n';
    cout << "Total amount = " << principal + interest << '\n';
    return 0;
}
