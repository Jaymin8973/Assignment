#include <stdio.h>

main() {
    int a, b;

    // Input two numbers from the user
    printf("Enter the first number: ");
    scanf("%d", &a);
    printf("Enter the second number: ");
    scanf("%d", &b);

    // Print original numbers
    printf("Before swapping: a = %d, b = %d\n", a, b);

    // Swap using multiplication and division
    a = a * b;
    b = a / b;
    a = a / b;

    // Print swapped numbers
    printf("After swapping using multiplication and division: a = %d, b = %d\n", a, b);


}

