#include<stdio.h>
    
	
main(){
	int n,a,b,c;
    printf("enter number:");
    scanf("%d",&n);
        
	// POW IS IN-BUILT FUNCTION THAT IS USED FOR POWER OF NUMBERS
    a = n;  // N^1 = a
        
    b = n*n;  // N^2 = b
        
    c = n*n*n;  // N^3 = c

    printf("N^1 = %d\n",a);
    printf("N^2 = %d\n",b);
    printf("N^3 = %d",c);
    }
