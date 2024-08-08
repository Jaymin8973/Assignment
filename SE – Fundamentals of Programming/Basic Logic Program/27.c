#include<stdio.h>

main(){
    float days;

    printf("Enter Days : ");
    scanf("%f", &days);

    float month = days / 30;  // FORMULA TO CONVERT DAYS INTO MONTH 

    printf("%.2f Days = %.2f Months",days, month); 
}

