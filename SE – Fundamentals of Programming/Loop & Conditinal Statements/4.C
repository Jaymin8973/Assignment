// PROGRAM 4 : DISPLAY TABLE OF GIVEN NUMBER - (START) --------------------->
#include<stdio.h>
void main(){
    int i, a;

    printf("Enter Number : ");
    scanf("%d", &a);

    for(i=1; i<=10; i++){
        printf("%d * %d = %d\n", a,i,a*i);
    }
}
// PROGRAM 4 : DISPLAY TABLE OF GIVEN NUMBER - (END) --------------------->