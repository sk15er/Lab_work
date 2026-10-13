// Program 12: Print the first ten natural numbers
#include <iostream>
using namespace std;

int main() {
    for (int number = 1; number <= 10; ++number)
        cout << number << (number == 10 ? '\n' : ' ');
    return 0;
}