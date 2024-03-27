#! /usr/bin/env node
// 1
import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }]);
// 2
if (pinAnswer.pin === myPin) {
    console.log("correct pin code");
    let operationAnwer = await inquirer.prompt([{
            name: "operation",
            message: "Please select opetion",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"]
        }]);
    // 3
    if (operationAnwer.operation === "withdraw") {
        let amountAnwer = await inquirer.prompt([{
                name: "amount",
                message: "Enter the amount you want to withdraw",
                type: "number"
            }]);
        if (amountAnwer.amount <= myBalance) {
            myBalance -= amountAnwer.amount;
            console.log(`your balance is:  ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    // 4
    else if (operationAnwer.operation === "check balance") {
        console.log(`Your balance is:  ${myBalance}`);
    }
    else if (operationAnwer.operation === "fastcash") {
        let fastAnwer = await inquirer.prompt([{
                name: "fastOption",
                message: "how much money want to withdraw",
                type: "list",
                choices: ["1000", "2000", "5000"]
            }]);
        if (fastAnwer.fastOption === "1000") {
            myBalance -= fastAnwer.fastOption;
            console.log(`Your remaining bakance is:  ${myBalance}`);
        }
        if (fastAnwer.fastOption === "2000") {
            myBalance -= fastAnwer.fastOption;
            console.log(`Your remaining bakance is:  ${myBalance}`);
        }
        // 5
        if (fastAnwer.fastOption === "5000") {
            myBalance -= fastAnwer.fastOption;
            console.log(`Your remaining bakance is:  ${myBalance}`);
        }
    }
}
else {
    console.log(`incorrect pin code`);
}
