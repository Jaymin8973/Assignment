#include <stdio.h>

main() {
    float salary, insurance, loan, remainingSalary;

    // Input monthly salary from the user
    printf("Enter your monthly salary: ");
    scanf("%f", &salary);

    // Calculate deductions
    insurance = salary * 0.10; // 10% insurance premium
    loan = salary * 0.10; // 10% loan installment

    // Calculate remaining salary
    remainingSalary = salary - (insurance + loan);

    // Print the deductions and remaining salary
    printf("Insurance premium (10%%): %.2lf\n", insurance);
    printf("Loan installment (10%%): %.2lf\n", loan);
    printf("Remaining salary after deductions: %.2lf\n", remainingSalary);

    
}

