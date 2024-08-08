#include <stdio.h>
#include <math.h>

main() {
    float principal, rate, amount, compoundInterest;
    int years;

    // Input from user
    printf("Enter the principal amount: ");
    scanf("%f", &principal);
    printf("Enter the annual interest rate (in percent): ");
    scanf("%f", &rate);
    printf("Enter the number of years the money is invested: ");
    scanf("%d", &years);

    // Calculate amount using compound interest formula
    amount = principal * pow(1 + rate / 100, years);

    // Calculate compound interest
    compoundInterest = amount - principal;

    // Print the result
    printf("The amount after %d years is: %.2f\n", years, amount);
    printf("The compound interest is: %.2f\n", compoundInterest);

    
}

