const fullName = "Desiree Laleman";
let age = 28;
const birthday = "Feburary 19th";
const pineapplePizza = true;
const lifeEvents = [
  "I was born in Bay City Michigan.",
  "I went to Delta College.",
  "I flew to Bejing China in 2010.",
  "I love cats and dogs.",
];

if (pineapplePizza === true) {
  console.log(
    "My name is " +
      fullName +
      " and I like pineapples on pizza. I am currenly " +
      age +
      " years old and my birthday is on " +
      birthday +
      "."
  );
} else {
  console.log(
    `My name is ${fullName} and I'm not into pioneapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
    continue;
  } else {
    counter++;
    console.log(
      `${randomNumber}===5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

let hours = prompt("How many hours have you worked?");
let wage = prompt("What is your current wage?");

while (hours > 0 && wage > 0) {
  if (hours > 40) {
    let overTime = hours % 40;
    let regularHours = hours - overTime;
    let regularPay = regularHours * wage;
    let overPay = wage * 1.5;
    let overTimePay = overTime * overPay;
    let totalPay = regularPay + overTimePay;
    console.log(
      `You worked ${hours} hours, with ${overTime} hours overtime. Your wage is ${wage} and hour, and is ${overPay} when clocking overtime. You have earned ${regularPay} with an additional ${overTimePay} dollars this week!. Your total income is $${totalPay}.`
    );
    const millionDollarWeeks = Math.round(1000000000 / totalPay);
    console.log(
      `It would take you ${millionDollarWeeks} weeks to make 1 Million Dollars if you work ${overTime} hours overtime consistently.`
    );
    break;
  } else {
    let pay = hours * wage;
    console.log(
      `You worked ${hours} hours this week, with a wage of ${wage} and hour. Earning you ${pay} dollars this week.`
    );
    const millionDollarWeeks = Math.round(1000000000 / pay);
    console.log(
      `It would take you ${millionDollarWeeks} weeks to make 1 Million Dollars.`
    );
    break;
  }
}

// This is also a valid solution as above!
// const wage = 10;
// const hours = 50;
// if (hours <= 40) {
//     const pay = wage * hours;
//     const weeksUntilMillion = 1000000/pay;
//     console.log(pay);
//     console.log(`It will take ${weeksUntilMillion} weeks until you make 1 million dollars!`);
// }
// else {
//     const extraHours = hours - 40;
//     const overTime = estraHours * (wage * 1.5);
//     const pay = 40 * wage + overTime;
//     console.log(pay);
// }
