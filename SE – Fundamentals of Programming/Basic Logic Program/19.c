#include <stdio.h>

main() {
    float principal, rate, amount;
    int times, years;

    // Input from user
    printf("Enter the principal amount: ");
    scanf("%f", &principal);
    printf("Enter the annual interest rate (in percent): ");
    scanf("%f", &rate);
    printf("Enter the number of times interest is compounded per year: ");
    scanf("%d", &times);
    printf("Enter the number of years the money is invested: ");
    scanf("%d", &years);

    // Convert annual interest rate from percentage to decimal
    rate = rate / 100;

    // Calculate compound interest
    amount = principal * pow(1 + rate / times, times * years);

    // Print the result

    printf("compund interest is: %.2f\n",amount);
}

