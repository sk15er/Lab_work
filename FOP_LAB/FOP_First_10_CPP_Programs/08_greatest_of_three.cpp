// Program 8: Greatest of three numbers
#include <iostream>
using namespace std;
int main() {
    double a, b, c;
    cout << "Enter three numbers: ";
    cin >> a >> b >> c;
    double greatest = a;
    if (b > greatest) greatest = b;
    if (c > greatest) greatest = c;
    cout << "Greatest number = " << greatest << '\n';
    return 0;
}
