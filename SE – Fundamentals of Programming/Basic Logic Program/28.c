#include<stdio.h>


main(){
    float year, months, days;

    printf("Enter years : ");
    scanf("%f", &year);

    months = year * 12;  // FORMULA TO CONVERT YEARS INTO MONTHS
    days = year * 365;  // FORMULA TO CONVERT YEARS INTO DAYS 

    printf("%.2f Days",days); 
    printf("\n%.2f Months",months); 
}

