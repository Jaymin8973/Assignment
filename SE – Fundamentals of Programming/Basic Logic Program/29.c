
#include<stdio.h>

main(){
    float minutes, seconds, hours;

    printf("Enter minutes : ");
    scanf("%f", &minutes);

    seconds = minutes * 60;  // FORMULA TO CONVERT MINUTES INTO SECONDS
    hours = minutes / 60;  // FORMULA TO CONVERT MINUTES INTO HOURS

    printf("%.2f Seconds", seconds); 
    printf("\n%.2f Hours", hours); 
}
