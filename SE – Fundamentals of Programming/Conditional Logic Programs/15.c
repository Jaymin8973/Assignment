#include <stdio.h>

main() {
    int phy, chem, math;
    int total, totalMathPhy;

    // Input the marks obtained in Physics, Chemistry, and Mathematics
    printf("Input the marks obtained in Physics: ");
    scanf("%d", &phy);
    printf("Input the marks obtained in Chemistry: ");
    scanf("%d", &chem);
    printf("Input the marks obtained in Mathematics: ");
    scanf("%d", &math);

    // Calculate the total marks and the total of Math and Physics
    total = phy + chem + math;
    totalMathPhy = phy + math;

    // Check the eligibility criteria
    if (math >= 65 && phy >= 55 && chem >= 50 && (total >= 190 || totalMathPhy >= 140)) {
        printf("The candidate is eligible.\n");
    } else {
        printf("The candidate is not eligible.\n");
    }

    return 0;
}

