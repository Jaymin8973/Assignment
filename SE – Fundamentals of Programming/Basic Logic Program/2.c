/*
2. Write a program to make Simple calculator (to make addition, subtraction,
multiplication, division and modulo)
*/

#include<stdio.h>

main()
{
	int a,b;
	printf("Enter value a : ");
	scanf("%d",&a);
	
	printf("Enter value b : ");
	scanf("%d",&b);
	
	printf("\nAddition of A and B is : %d",a+b);
	
	printf("\nSubtraction of A and B is : %d",a-b);
	
	printf("\nMultiplication of A and B is : %d",a*b);
	
	printf("\nDivision of A and B is : %d",a/b);
	
	printf("\nModulo of A and B is : %d",a%b);
	
}

