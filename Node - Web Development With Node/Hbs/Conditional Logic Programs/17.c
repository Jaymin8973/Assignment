#include <stdio.h>

main() {
    int angle1, angle2, angle3, sum;

    // Input the three angles of the triangle
    printf("Enter the three angles of the triangle:\n");
    printf("Angle 1: ");
    scanf("%d", &angle1);
    printf("Angle 2: ");
    scanf("%d", &angle2);
    printf("Angle 3: ");
    scanf("%d", &angle3);

    // Calculate the sum of the angles
    sum = angle1 + angle2 + angle3;

    // Check if the sum of the angles is 180 degrees
    if (sum == 180) 
	{
        printf("The angles can form a triangle");
    } 
	else 
	{
        printf("The angles cannot form a triangle.");
    }

}

