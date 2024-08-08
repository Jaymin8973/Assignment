#include <stdio.h>

main() {
    // Declare a variable for the salary
    float salary;
    
    // Input the salary from the user
    printf("Enter the salary: ");
    scanf("%f", &salary);
    
    // Declare a variable for the insurance premium
    float premium;
    
    // Calculate the insurance premium based on the salary
    if (salary < 20000) {
        premium = 0.02 * salary;
    } 
	else if (salary <= 50000) {
        premium = 0.03 * salary;
    }
	 else {
        premium = 0.05 * salary;
    }
    
    // Output the insurance premium
    printf("The insurance premium is: INR: %.2f\n", premium);
    
    
}

