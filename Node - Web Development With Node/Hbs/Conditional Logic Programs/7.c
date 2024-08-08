#include<stdio.h>

#define color_red "\x1b[31m"
#define color_green "\x1b[32m"

main()
{
	int n;
	
	printf ("Enter marks :");
	scanf("%d",&n);
	
	if (n>=33)
	{
		printf(color_green "congratulations you have sucessfully cleared this exam");
	}
	
	else 
	{
		printf(color_red"better luck next time");
	}	
}
