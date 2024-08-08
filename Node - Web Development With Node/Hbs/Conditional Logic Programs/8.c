#include <stdio.h>

main() {
    float height;

    // Input height from user
    printf("Enter the height of the person in centimeters: ");
    scanf("%f", &height);

    // Categorize based on height
    if (height < 150.0) 
	{
        printf("The person is categorized as Short.\n");
    } 
	else if (height >= 150.0 && height <= 170.0) 
	{
        printf("The person is categorized as Average.\n");
    } 
	else if (height > 170.0 && height <= 190.0) 
	{
        printf("The person is categorized as Tall.\n");
    } 
	else 
	{
        printf("The person is categorized as Very Tall.\n");
    }

    return 0;
}

