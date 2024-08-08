#include <stdio.h>

int main() {
	
    int ascii_value;
    
    // Input the ASCII value from the user
    printf("Enter an ASCII value: ");
    scanf("%d", &ascii_value);
    
    // Check if the input is a valid ASCII value (0 to 127)
    if (ascii_value < 0 || ascii_value > 127) {
        printf("Invalid ASCII value. Please enter a value between 0 and 127.\n");
    } 
	else {
        // Convert the ASCII value to the corresponding character
        char character = (char)ascii_value;
        
        // Output the character
        printf("The character corresponding to ASCII value %d is: %c\n", ascii_value, character);
    }
    
    return 0;
}

