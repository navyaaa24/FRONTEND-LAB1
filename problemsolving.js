// Question 1
let input1 = prompt("Enter a value:");

if (input1.trim() !== "" && !isNaN(input1)) {
    console.log(Number(input1));
}
else {
    console.log(input1);
}
// Question 2
let input2 = prompt("Enter a value:");

input2 = input2.trim();

switch (true) {

    case input2 !== "" && !isNaN(input2):
        console.log(Number(input2));
        break;

    default:
        console.log(input2);
}
// Question 3

let num3 = 1234;
let reverse3 = 0;
let sum3 = 0;

while (num3 > 0) {

    let digit = num3 % 10;

    reverse3 = reverse3 * 10 + digit;

    sum3 = sum3 + digit;

    num3 = Math.floor(num3 / 10);
}

console.log("Reverse:", reverse3);
console.log("Digit Sum:", sum3);
// Question 4

let num4 = 9087654;
let count4 = 0;
let even4 = 0;
let odd4 = 0;

while (num4 > 0) {

    let digit = num4 % 10;

    count4++;

    if (digit % 2 === 0) {
        even4++;
    }
    else {
        odd4++;
    }

    num4 = Math.floor(num4 / 10);
}

console.log("Total digits:", count4);
console.log("Even digits:", even4);
console.log("Odd digits:", odd4);
// Question 5

let num5 = 7;
let fact5 = 1;

while (num5 > 0) {

    fact5 = fact5 * num5;

    num5--;
}

console.log("Factorial:", fact5);
// Question 6

let num6 = 12321;
let original6 = num6;
let reverse6 = 0;

while (num6 > 0) {

    let digit = num6 % 10;

    reverse6 = reverse6 * 10 + digit;

    num6 = Math.floor(num6 / 10);
}

if (original6 === reverse6) {
    console.log("Palindrome");
}
else {
    console.log("Not Palindrome");
}
// Question 7

let num7 = 245837462;
let evenSum7 = 0;
let oddSum7 = 0;

while (num7 > 0) {

    let digit = num7 % 10;

    if (digit % 2 === 0) {
        evenSum7 = evenSum7 + digit;
    }
    else {
        oddSum7 = oddSum7 + digit;
    }

    num7 = Math.floor(num7 / 10);
}

console.log("Even Sum:", evenSum7);
console.log("Odd Sum:", oddSum7);
// Question 8

let num8 = 4827;

do {
    let digit = num8 % 10;

    console.log(digit);

    num8 = Math.floor(num8 / 10);

} while (num8 > 0);
// Question 9

for (let num9 = 100; num9 <= 999; num9++) {

    let temp = num9;
    let sum = 0;

    while (temp > 0) {

        let digit = temp % 10;

        sum = sum + digit ** 3;

        temp = Math.floor(temp / 10);
    }

    if (sum === num9) {
        console.log(num9);
    }
}
// Question 10

let students = {
    Rahul: 85,
    Priya: 92,
    Amit: 76,
    Renu: 81,
    Kiran: 68
};

let total = 0;
let highest = 0;
let topper = "";

for (let name in students) {

    total = total + students[name];

    if (students[name] > highest) {
        highest = students[name];
        topper = name;
    }
}

let average = total / 5;

console.log("Total Marks:", total);
console.log("Average Marks:", average);
console.log("Highest Marks:", highest);
console.log("Topper:", topper);
// Question 11

let arr = [12, -5, 0, 23, -18, 0, 7, -2, 15];

let sum = 0;
let negativeSum = 0;
let zeroCount = 0;

for (let num of arr) {

    sum = sum + num;

    if (num < 0) {
        negativeSum = negativeSum + num;
    }

    if (num === 0) {
        zeroCount++;
    }
}

console.log("Total Sum:", sum);
console.log("Negative Sum:", negativeSum);
console.log("Zero Count:", zeroCount);
// Question 12
{
    let students = {
        Rahul: 85,
        Priya: 92,
        Anuj: 76,
        Renu: 81,
        Kiran: 68
    };

    let total = 0;
    let highestMarks = 0;
    let topper = "";

    for (let name in students) {
        total += students[name];

        if (students[name] > highestMarks) {
            highestMarks = students[name];
            topper = name;
        }
    }

    console.log("Total Marks:", total);
    console.log("Highest Marks:", highestMarks);
    console.log("Topper:", topper);
}
// Question 13
{
    let nos = [12, -5, 0, 23, -18, 0, 7, -2, 15];

    let positiveSum = 0;
    let negativeSum = 0;
    let zeroCount = 0;

    for (let num of nos) {
        if (num > 0) {
            positiveSum += num;
        }
        else if (num < 0) {
            negativeSum += num;
        }
        else {
            zeroCount++;
        }
    }

    console.log("Positive Sum:", positiveSum);
    console.log("Negative Sum:", negativeSum);
    console.log("Zero Count:", zeroCount);
}
