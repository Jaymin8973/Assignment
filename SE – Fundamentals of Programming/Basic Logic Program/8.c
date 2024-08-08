//circumference of Rectangle formula : C = 4 * a
#include <stdio.h>

main()
{    int length, width, circumference;

	// user input 
    printf("Enter the length of the rectangle :");
    scanf("%d", &length);
    printf("Enter the width of the rectangle :");
    scanf("%d", &width);

    // calculate the circumference
    circumference = 2 *(length + width);
    printf("\nThe circumference of the rectangle is %d.", circumference);

}
