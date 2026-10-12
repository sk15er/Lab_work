# Create_FOP_C_Programs_OneClick.ps1
# Double-click this PowerShell script to create the first 10 FOP lab programs in C.
# It does NOT create a ZIP and does not need Python.

$ErrorActionPreference = "Stop"

$folder = Join-Path $PSScriptRoot "FOP_First_10_C_Programs"
New-Item -ItemType Directory -Path $folder -Force | Out-Null

$programs = [ordered]@{
    "01_hello.c" = @'
/* Program 1: Print HELLO */
#include <stdio.h>

int main(void) {
    printf("HELLO\n");
    return 0;
}
'@
    "02_add_two_numbers.c" = @'
/* Program 2: Add two numbers */
#include <stdio.h>

int main(void) {
    double a, b;
    printf("Enter two numbers: ");
    if (scanf("%lf %lf", &a, &b) != 2) {
        printf("Invalid input.\n");
        return 1;
    }
    printf("Sum = %.2f\n", a + b);
    return 0;
}
'@
    "03_simple_interest.c" = @'
/* Program 3: Calculate simple interest */
#include <stdio.h>

int main(void) {
    double principal, rate, time, interest;
    printf("Enter principal, annual rate (%%), and time in years: ");
    if (scanf("%lf %lf %lf", &principal, &rate, &time) != 3) {
        printf("Invalid input.\n");
        return 1;
    }
    interest = principal * rate * time / 100.0;
    printf("Simple interest = %.2f\n", interest);
    printf("Total amount = %.2f\n", principal + interest);
    return 0;
}
'@
    "04_absolute_value.c" = @'
/* Program 4: Find absolute value */
#include <stdio.h>
#include <math.h>

int main(void) {
    double number;
    printf("Enter a number: ");
    if (scanf("%lf", &number) != 1) {
        printf("Invalid input.\n");
        return 1;
    }
    printf("Absolute value = %.2f\n", fabs(number));
    return 0;
}
'@
    "05_swap_two_numbers.c" = @'
/* Program 5: Swap two numbers */
#include <stdio.h>

int main(void) {
    double a, b, temp;
    printf("Enter two numbers: ");
    if (scanf("%lf %lf", &a, &b) != 2) {
        printf("Invalid input.\n");
        return 1;
    }
    printf("Before swapping: a = %.2f, b = %.2f\n", a, b);
    temp = a;
    a = b;
    b = temp;
    printf("After swapping:  a = %.2f, b = %.2f\n", a, b);
    return 0;
}
'@
    "06_gross_salary.c" = @'
/* Program 6: Gross salary = basic + HRA + DA (assumed formula) */
#include <stdio.h>

int main(void) {
    double basic, hra, da;
    printf("Enter basic salary, HRA, and DA: ");
    if (scanf("%lf %lf %lf", &basic, &hra, &da) != 3) {
        printf("Invalid input.\n");
        return 1;
    }
    printf("Gross salary = %.2f\n", basic + hra + da);
    return 0;
}
'@
    "07_even_or_odd.c" = @'
/* Program 7: Check whether an integer is even or odd */
#include <stdio.h>

int main(void) {
    long long number;
    printf("Enter an integer: ");
    if (scanf("%lld", &number) != 1) {
        printf("Invalid input.\n");
        return 1;
    }
    if (number % 2 == 0)
        printf("%lld is even.\n", number);
    else
        printf("%lld is odd.\n", number);
    return 0;
}
'@
    "08_greatest_of_three.c" = @'
/* Program 8: Find the greatest of three numbers */
#include <stdio.h>

int main(void) {
    double a, b, c, greatest;
    printf("Enter three numbers: ");
    if (scanf("%lf %lf %lf", &a, &b, &c) != 3) {
        printf("Invalid input.\n");
        return 1;
    }
    greatest = a;
    if (b > greatest) greatest = b;
    if (c > greatest) greatest = c;
    printf("Greatest number = %.2f\n", greatest);
    return 0;
}
'@
    "09_student_grade.c" = @'
/* Program 9: Example grade scale; use your college's official scale if provided */
#include <stdio.h>

int main(void) {
    double marks;
    printf("Enter marks out of 100: ");
    if (scanf("%lf", &marks) != 1) {
        printf("Invalid input.\n");
        return 1;
    }
    if (marks < 0 || marks > 100)
        printf("Invalid marks. Enter a value from 0 to 100.\n");
    else if (marks >= 90)
        printf("Grade: A\n");
    else if (marks >= 80)
        printf("Grade: B\n");
    else if (marks >= 70)
        printf("Grade: C\n");
    else if (marks >= 60)
        printf("Grade: D\n");
    else if (marks >= 40)
        printf("Grade: E\n");
    else
        printf("Grade: F (Fail)\n");
    return 0;
}
'@
    "10_factorial_or_divisors.c" = @'
/* Program 10: Calculate factorial OR print positive divisors */
#include <stdio.h>

int main(void) {
    int choice;
    printf("Choose an option:\n");
    printf("1. Calculate factorial\n");
    printf("2. Print positive divisors\n");
    printf("Enter choice (1 or 2): ");
    if (scanf("%d", &choice) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    if (choice == 1) {
        int n, i;
        unsigned long long factorial = 1;
        printf("Enter a non-negative integer (0 to 20): ");
        if (scanf("%d", &n) != 1 || n < 0 || n > 20) {
            printf("Please enter an integer from 0 to 20.\n");
            return 1;
        }
        for (i = 2; i <= n; i++)
            factorial *= (unsigned long long)i;
        printf("%d! = %llu\n", n, factorial);
    } else if (choice == 2) {
        int n, i;
        printf("Enter a positive integer: ");
        if (scanf("%d", &n) != 1 || n <= 0) {
            printf("Please enter a positive integer.\n");
            return 1;
        }
        printf("Positive divisors of %d: ", n);
        for (i = 1; i <= n; i++)
            if (n % i == 0) printf("%d ", i);
        printf("\n");
    } else {
        printf("Invalid choice.\n");
    }
    return 0;
}
'@
}

foreach ($entry in $programs.GetEnumerator()) {
    $filePath = Join-Path $folder $entry.Key
    # UTF-8 without BOM for compatibility with common C compilers/editors.
    [System.IO.File]::WriteAllText($filePath, ($entry.Value.Trim() + "`r`n"), (New-Object System.Text.UTF8Encoding($false)))
}

$readme = @'
FOP Lab — First 10 Programs in C

Files are saved as standard C source files (.c).

To compile with GCC:
  gcc 01_hello.c -o hello.exe
  .\hello.exe

For program 4, if your Linux compiler asks for the math library:
  gcc 04_absolute_value.c -o absolute_value -lm

Notes:
- Program 6 assumes gross salary = basic + HRA + DA.
- Program 9 uses an example grading scale; use your teacher's scale if given.
- Program 10 lets you choose factorial or positive divisors.
'@
[System.IO.File]::WriteAllText((Join-Path $folder "README.txt"), $readme, (New-Object System.Text.UTF8Encoding($false)))

Write-Host ""
Write-Host "Success! Created 10 C programs in:" -ForegroundColor Green
Write-Host $folder -ForegroundColor Cyan
Write-Host ""
Write-Host "Opening the folder..."
Start-Process explorer.exe -ArgumentList "`"$folder`""
Write-Host "Done. You can close this window."
Read-Host "Press Enter to exit"
