//circumference of Triangle formula : triangle = a + b + c

#include<stdio.h>

main()
{
    float a,b,c,triangle;
	
	//Input 
    printf("Enter Value of A: ");
    scanf("%f",&a);
    printf("Enter Value of B: ");
    scanf("%f",&b);
	printf("Enter Value of C: ");
    scanf("%f",&c);
    
    /* Calculate circumference of triangle */
    triangle = a+b+c ;

    /* Print circumference of triangle */
    printf("circumference of triangle  = %f ", triangle);

}
