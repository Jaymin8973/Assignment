#include <stdio.h>

main() {
    float costPrice, sellingPrice, profit, loss;

    // Input the cost price and selling price
    printf("Enter the cost price: ");
    scanf("%f", &costPrice);
    printf("Enter the selling price: ");
    scanf("%f", &sellingPrice);

    // Calculate profit or loss
    if (sellingPrice > costPrice) 
	{
        profit = sellingPrice - costPrice;
        printf("Profit: %.2f", profit);
    } 
	else if (costPrice > sellingPrice) {
        loss = costPrice - sellingPrice;
        printf("Loss: %.2f", loss);
    } 
	else 
	{
        printf("No profit, no loss.");
    }

}

