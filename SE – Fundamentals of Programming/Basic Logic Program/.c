#include<stdio.h>


main(){
    int num1, num2, sum;

    printf("Enter 1st integers : ");
    scanf("%d", &num1);
    printf("Enter 2nd integers : ");
    scanf("%d", &num2);

    sum = num1 + num2;

    printf("%d + %d = %d\n", num1, num2, sum);
    printf("size of %d is %zu Bytes", sum, sizeof(sum));
}
