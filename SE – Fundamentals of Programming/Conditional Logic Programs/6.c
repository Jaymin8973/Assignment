#include <stdio.h>

main() {
    char ch;
    printf("Enter a character: ");
    scanf("%c", &ch);

    // Check if the character is a vowel
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') 
	{
        printf("%c is a vowel.\n", ch);
    } 
	else
	 {	
        printf("%c is not a vowel.\n", ch);
    }

}

