
#include<stdio.h>
main(){
    int a, b, temp;

    // Input from user 
    printf("Enter A : ");
    scanf("%d", &a);
    printf("Enter B : ");
    scanf("%d", &b);

    // BEFORE SWAPPING VALUE OF A & B
    printf("\nBefore Swap A : %d", a);
    printf("\nBefore Swap B : %d", b);

    // WITHOUT 3RD VARIABLE SWAPPING
    a = a + b;
    b = a - b;
    a = a - b;

    // WITH 3RD VARIABLE SWAPPING
    // temp = a;
    // a = b;
    // b = temp;

    // AFTER SWAPPING VALUE OF A & B
    printf("\n\nAfter Swap A : %d", a);
    printf("\nAfter Swap B : %d", b);
}

