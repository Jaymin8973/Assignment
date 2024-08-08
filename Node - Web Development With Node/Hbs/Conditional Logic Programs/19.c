#include <stdio.h>

main() {
    int customerID, unitsConsumed;
    char customerName[50];
    float billAmount = 0.0, surcharge = 0.0, totalAmount = 0.0;

    // Input customer details
    printf("Enter Customer ID: ");
    scanf("%d", &customerID);
    printf("Enter Customer Name: ");
    scanf("%s", customerName);
    printf("Enter Units Consumed: ");
    scanf("%d", &unitsConsumed);

    // Calculate bill amount based on units consumed
    if (unitsConsumed <= 350) 
	{
        billAmount = unitsConsumed * 1.20;
    } 
	else if (unitsConsumed < 600) 
	{
        billAmount = 350 * 1.20 + (unitsConsumed - 350) * 1.50;
    } 
	else if (unitsConsumed < 800) 
	{
        billAmount = 350 * 1.20 + 250 * 1.50 + (unitsConsumed - 600) * 1.80;
    } 
	else 
	{
        billAmount = 350 * 1.20 + 250 * 1.50 + 200 * 1.80 + (unitsConsumed - 800) * 2.00;
    }

    // Check if bill exceeds Rs. 800 to apply surcharge
    if (billAmount > 800) {
        surcharge = billAmount * 0.18;
    }

    // Calculate total amount
    totalAmount = billAmount + surcharge;

    // Ensure the minimum bill amount is Rs. 256
    if (totalAmount < 256) 
	{
        totalAmount = 256;
    }

    // Display the bill details
    printf("\nElectricity Bill:\n");
    printf("Customer ID: %d\n", customerID);
    printf("Customer Name: %s\n", customerName);
    printf("Units Consumed: %d\n", unitsConsumed);
    printf("Bill Amount: Rs. %.2f\n", billAmount);
    	if (surcharge > 0) 
	{
        printf("Surcharge: Rs. %.2f\n", surcharge);
    }
    printf("Total Amount to be Paid: Rs. %.2f\n", totalAmount);

}

