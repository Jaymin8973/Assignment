// C Program to Calculate  circumference and Area of circle

#include <stdio.h>

main() {
  int radius;
  float PI = 3.14, area, circumference;

	// user input
  printf("Enter the radius of circle: ");
  scanf("%d",&radius);

	//calculate area 
  area = PI * radius * radius;
  printf("The Area of circle is: %f", area);

	//calculate Circumference
  circumference = 2 * PI * radius;
  printf("\nThe Circumference of circle is: %f", circumference);

}
