#! /usr/bin/env node
import inquirer from "inquirer";
let Conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.21,
        "GBP": 1,
        "PKR": 271.79,
    },
    "USD": {
        "USD": 1,
        "GBP": 0.83,
        "PKR": 225.50,
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Conversion Currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Conversion Amount:"
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let final = Conversion[from][to] * amount;
    console.log(`Your Conversion from ${from} to ${to} is ${final}`);
}
else {
    console.log("Invalid input");
}
// import inquirer from "inquirer";
// let Convertion = {
//     "PKR": {
//         "USD": 0.0044,
//         "GBP": 0.0037,
//         "PKR": 1,
//     },
//     "GBP": {
//         "USD": 1.21,
//         "GBP": 1,
//         "PKR": 271.79,
//     },
//     "USD":{
//         "USD": 1,
//         "GBP": 0.83,
//         "PKR": 225.50,
//     }
// };
// const answer:{
//     from:"PKR"|"USD"|"GBP",
//     to:"PKR"|"USD"|"GBP",
//     amount:number
// }= await inquirer.prompt([
//     {
//         type:"list",
//         name:"from",
//         choices:["PKR,USD,GBP"],
//         message:"Select Your Currency:"
//     },
//     {
//         type:"list",
//         name:"to",
//         choices:["PKR,USD,GBP"],
//         message:"Select Your  Convertion Currency:"
//     },
//     {
//         type:"number",
//         name:"amount",
//         message:"Enter Your Convertion Amount:"
//     }
// ]);
// const {from,to,amount}=answer;
// if(from&& to && amount){
//     let final= Convertion[from][to]*amount;
//     console.log('Your Convertion from ${from} to ${to} is ${final}');
// }else{
//     console.log("Invalid input")
// }
