#include <stdio.h>

main() {
    int num;
    
    //user input
    printf("Enter a Number: ");
    scanf("%d",&num);

    //check the number 
    
    if (num>0)
    {
    	printf("Number is positive");
	}
	else if(num==0)
	{
		printf("Number is zero");
	}
	else
	{
		printf("Number is Negative");
	}
   
}

