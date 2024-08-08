#include <stdio.h>

main() {
    
    int students,apples_per_student=5,total_apples ;
    
    // Input the number of students from the user
    printf("Enter the number of students: ");
    scanf("%d", &students);
    
    // Calculate the total number of apples required
     total_apples = students * apples_per_student;
    
    // Output the total number of apples required
    printf("The total number of apples required is: %d\n", total_apples);
    

}

