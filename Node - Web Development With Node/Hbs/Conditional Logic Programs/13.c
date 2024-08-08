#include <stdio.h>

main() {
    int num1, num2, num3, max;

    // Input three numbers
    printf("Enter first numbers: ");
    scanf("%d", &num1);
    printf("Enter second numbers: ");
    scanf("%d",&num2);
    printf("Enter third numbers: ");
    scanf("%d",&num1);

    // Find the maximum using ternary operator
    max = (num1 > num2) ? ( (num1 > num3) ? num1 : num3 ) : ( (num2 > num3) ? num2 : num3 );

    // Print the maximum number
    printf("The maximum number is %d\n", max);

}

