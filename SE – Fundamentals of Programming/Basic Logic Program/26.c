#include<stdio.h>
void main(){
    int f,c;

    printf("Enter Fahrenhit : ");
    scanf("%d", &f);

    c = (f- 32) * 5/9;  // FORMULA

    printf("%.2f celcius",(float) c);
}
