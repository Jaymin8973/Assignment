#include<stdio.h>

main()
{
	int n1,n2,n3;
	printf("Enter number n1:");
	scanf("%d",&n1);
	
	printf("Enter number n2:");
	scanf("%d",&n2);
	
	printf("Enter number n3:");
	scanf("%d",&n3);
	
	if (n1>n2)
	{
		if(n1>n3)
		{
			printf("%d is largest",n1);
		}
		
		else
		{
			printf("%d is largest",n3);
		}
	}
	
	else
	{
		if(n2>n3)
		{
			printf("%d is largest",n2);
		}
		else
		{
			printf("%d is largest",n3);
		}
	}
}
