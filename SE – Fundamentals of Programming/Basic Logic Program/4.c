// C Program to Calculate Area of Square
#include <stdio.h>

main(){
    int side, area;
    
    // Asking for input
    printf("Enter the side of the square: ");
    scanf("%d", &side);
    
    // Calculating Square
    area = side * side;
    
    // Displaying output
    printf("Area of the Square having side %d is: %d", side, area);
  
}
