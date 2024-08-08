#include <stdio.h>

main() {
    char operator;
    int num1, num2;
    printf("Enter an operator (+, -, *, /, %): ");
    scanf(" %c", &operator);
    printf("Enter first operands: ");
    scanf("%d",&num1);
    printf("Enter second operands: ");
	scanf("%d",&num2);

    // Perform the operation based on the input operator
    if (operator == '+') {
        printf("%d + %d = %d\n", num1, num2, num1 + num2);
    } else if (operator == '-') {
        printf("%d - %d = %d\n", num1, num2, num1 - num2);
    } else if (operator == '*') {
        printf("%d * %d  = %d\n", num1, num2, num1 * num2);
    } else if (operator == '/') {
       printf("%d / %d  = %d\n", num1, num2, num1 * num2);
    } else if (operator == '%') {
      
            printf("%d %% %d = %d\n", num1, num2, num1 % num2);
    } else {
        printf("Error! Operator is not correct.\n");
    }

    return 0;
}

