#include <stdio.h>

main() {
    int monthNumber;
    int year;
    int daysInMonth;

    // Input the month number and the year
    printf("Enter the month number (1 to 12): ");
    scanf("%d", &monthNumber);
    printf("Enter the year: ");
    scanf("%d", &year);

    // Determine the number of days in the month
    switch (monthNumber) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            // Check for leap year
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                daysInMonth = 29;
            } else {
                daysInMonth = 28;
            }
            break;
      
	    default:
            printf("Invalid month number. Please enter a number between 1 and 12.\n");
            return 1;  // Exit the program with an error code
    }

    // Display the number of days in the month
    printf("Number of days in month %d: %d\n", monthNumber, daysInMonth);

}

