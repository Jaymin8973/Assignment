#include<stdio.h>

main(){
    float kMeter;

    printf("Enter Kilometer : ");
    scanf("%f", &kMeter);

    float meter = kMeter * 1000;  // FORMULA TO CONVERT KILOMETER INTO METERS

    printf("%.2f Meters", meter); 
}
