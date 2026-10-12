#!/usr/bin/env python3
"""
Generate the first 10 FOP lab C++ programs in a folder.
Works on Windows and Linux with Python 3.
"""
from pathlib import Path

PROGRAMS = {
    "01_hello.cpp": r"""// Program 1: Print HELLO
#include <iostream>
using namespace std;
int main() {
    cout << "HELLO\n";
    return 0;
}
""",
    "02_add_two_numbers.cpp": r"""// Program 2: Add two numbers
#include <iostream>
using namespace std;
int main() {
    double a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    cout << "Sum = " << a + b << '\n';
    return 0;
}
""",
    "03_simple_interest.cpp": r"""// Program 3: Calculate simple interest
#include <iostream>
using namespace std;
int main() {
    double principal, rate, time;
    cout << "Enter principal, annual rate (%), and time (years): ";
    cin >> principal >> rate >> time;
    double interest = principal * rate * time / 100.0;
    cout << "Simple interest = " << interest << '\n';
    cout << "Total amount = " << principal + interest << '\n';
    return 0;
}
""",
    "04_absolute_value.cpp": r"""// Program 4: Find absolute value
#include <iostream>
#include <cmath>
using namespace std;
int main() {
    double number;
    cout << "Enter a number: ";
    cin >> number;
    cout << "Absolute value = " << fabs(number) << '\n';
    return 0;
}
""",
    "05_swap_two_numbers.cpp": r"""// Program 5: Swap two numbers
#include <iostream>
using namespace std;
int main() {
    double a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    double temp = a;
    a = b;
    b = temp;
    cout << "After swapping: a = " << a << ", b = " << b << '\n';
    return 0;
}
""",
    "06_gross_salary.cpp": r"""// Program 6: Gross salary = basic salary + HRA + DA (assumed formula)
#include <iostream>
using namespace std;
int main() {
    double basic, hra, da;
    cout << "Enter basic salary, HRA, and DA: ";
    cin >> basic >> hra >> da;
    cout << "Gross salary = " << basic + hra + da << '\n';
    return 0;
}
""",
    "07_even_or_odd.cpp": r"""// Program 7: Check even or odd
#include <iostream>
using namespace std;
int main() {
    long long number;
    cout << "Enter an integer: ";
    cin >> number;
    if (number % 2 == 0) cout << "Even\n";
    else cout << "Odd\n";
    return 0;
}
""",
    "08_greatest_of_three.cpp": r"""// Program 8: Greatest of three numbers
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
""",
    "09_student_grade.cpp": r"""// Program 9: Example grade scale; change to your college's official scale
#include <iostream>
using namespace std;
int main() {
    double marks;
    cout << "Enter marks out of 100: ";
    cin >> marks;
    if (marks < 0 || marks > 100) cout << "Invalid marks\n";
    else if (marks >= 90) cout << "Grade: A\n";
    else if (marks >= 80) cout << "Grade: B\n";
    else if (marks >= 70) cout << "Grade: C\n";
    else if (marks >= 60) cout << "Grade: D\n";
    else if (marks >= 40) cout << "Grade: E\n";
    else cout << "Grade: F (Fail)\n";
    return 0;
}
""",
    "10_factorial_or_divisors.cpp": r"""// Program 10: Factorial or positive divisors
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
""",
}

def main():
    output_dir = Path(__file__).resolve().parent / "FOP_First_10_Programs"
    output_dir.mkdir(parents=True, exist_ok=True)
    for filename, source in PROGRAMS.items():
        (output_dir / filename).write_text(source, encoding="utf-8")
    readme = """FOP Lab — First 10 C++ Programs

Compile a file using g++:
  Linux:   g++ 01_hello.cpp -o hello && ./hello
  Windows: g++ 01_hello.cpp -o hello.exe && .\\hello.exe

Program 6 assumes gross salary = basic + HRA + DA.
Program 9 uses an example grade scale; check your instructor's official scale.
Program 10 lets you choose factorial or listing positive divisors.
"""
    (output_dir / "README.txt").write_text(readme, encoding="utf-8")
    print(f"Created {len(PROGRAMS)} C++ files in: {output_dir}")

if __name__ == "__main__":
    main()
