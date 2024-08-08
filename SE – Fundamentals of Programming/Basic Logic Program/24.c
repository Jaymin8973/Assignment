#include <stdio.h>

#define NUM_EMPLOYEES 5

int main() {
    char names[NUM_EMPLOYEES][50];
    double salaries[NUM_EMPLOYEES];
    double totalSalary = 0.0, averageSalary;
    int i;

    // Input names and salaries of 5 employees
    for (i = 0; i < NUM_EMPLOYEES; i++) {
        printf("Enter the name of employee %d: ", i + 1);
        scanf("%s", names[i]);
        printf("Enter the salary of employee %d: ", i + 1);
        scanf("%lf", &salaries[i]);
        totalSalary += salaries[i];
    }

    // Calculate average salary
    averageSalary = totalSalary / NUM_EMPLOYEES;

    // Print the result
    printf("\nTotal salary of all employees: %.2lf\n", totalSalary);
    printf("Average salary of all employees: %.2lf\n", averageSalary);

   
}

