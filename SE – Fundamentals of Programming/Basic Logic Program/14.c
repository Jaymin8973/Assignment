#include <stdio.h>

main() {
    char character;
    
    // Input the character from the user
    printf("Enter a character: ");
    scanf("%c", &character);
    
    // Convert the character to its corresponding ASCII value
    int ascii_value = (int)character;
    
    // Output the ASCII value
    printf("The ASCII value of '%c' is: %d\n", character, ascii_value);
    
    
}

