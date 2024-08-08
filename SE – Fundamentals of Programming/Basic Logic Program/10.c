#include <stdio.h>

 main() {
    // Declare variables for width, height, and length
    float width, height, length;
    
    // Input width, height, and length from the user
    printf("Enter the width of the rectangular prism: ");
    scanf("%f", &width);
    
    printf("Enter the height of the rectangular prism: ");
    scanf("%f", &height);
    
    printf("Enter the length of the rectangular prism: ");
    scanf("%f", &length);
    
    // Calculate the surface area using the formula A = 2(wl + hl + hw)
    double area = 2 * (width * length + height * length + height * width);
    
    // Output the surface area
    printf("\nThe surface area of the rectangular prism is: %.2f\n", area);
    
 }

