#include <stdio.h>

main() {
    float side_length;
    
    // Input the side length from the user
    printf("Enter the side length of the square: ");
    scanf("%f", &side_length);
    
    // Calculate the circumference using the formula C = 4 * a
    double circumference = 4 * side_length;
    
    // Output the circumference
    printf("The circumference of the square is: %.2f\n", circumference);

}

