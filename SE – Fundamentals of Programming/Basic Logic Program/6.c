// C program to find area of a triangle 


#include <stdio.h>

int main()
{
    float base, height, area;

    /* user input */
    printf("Enter base of the triangle: ");
    scanf("%f", &base);
    printf("Enter height of the triangle: ");
    scanf("%f", &height);

    /* Calculate area of triangle */
    area = (base * height) / 2;

    /* Print the output */
    printf("Area of the triangle = %.2f sq. units", area);

 
}
