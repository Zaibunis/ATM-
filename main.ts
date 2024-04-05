import inquirer from "inquirer";

let myBalance = 20000; //Dollar
let myPin = 5678;

let pinAnswer = await inquirer.prompt(
  [
     { name: "pin",
       message: "enter your pin code :",
       type: "number",
     } 
  ]
);

//56789 = 5678 - false
//conditional operators:
if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt(
   [ 
       {
         name: "operation",
        message: "please select option : ",
        type: "list",
        choices: ["withdraw", "check balance"],
       }
  ]
  );

  console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
    [  
      {
        name: "amount",
        message: "enter your amount : ",
        type: "number",
      }
    ]
    );
    
    // = , -= , += (assignment operator):
    myBalance -= amountAns.amount;
    console.log("Your remaining balance is : " + myBalance)

  } else if (operationAns.operation === "check balance") {
    console.log("Your balance is : " + myBalance)
  }
  
} else {
  console.log("Incorrect pin code");
}
