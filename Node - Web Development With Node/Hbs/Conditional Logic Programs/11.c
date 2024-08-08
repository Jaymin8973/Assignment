#include <stdio.h>

main() {
    int num;
    
    // Input the number
    printf("Enter a number: ");
    scanf("%d", &num);
    
    // Check if the number is even or odd using ternary operator
    (num % 2 == 0) ? printf("%d is even\n", num) : printf("%d is odd\n", num);

}

