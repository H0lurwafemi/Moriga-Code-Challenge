# Moriga-Code-Challenge

# Programming Practice: Calculation and Decision Exercises

This repository contains JavaScript solutions to three programming exercises that involve calculations and decision-making.

## Table of Contents
- [Question 1: Student Grade Calculation](#question-1-student-grade-calculation)
- [Question 2: Speed Limit and Demerit Points](#question-2-speed-limit-and-demerit-points)
- [Question 3: Net Salary Calculation](#question-3-net-salary-calculation)

---

## Question 1: Student Grade Calculation

**Problem Statement:**
Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:
- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40

**Solution:**
```javascript
// Solution 1: Calculate Grades based on Marks
function CalculateMarks(mark) {
    // Check various grade ranges
    if (mark >= 80 && mark <= 100) {
        return "A";
    } else if (mark >= 60 && mark <= 79) {
        return "B";
    } else if (mark >= 50 && mark <= 59) {
        return "C";
    } else if (mark >= 40 && mark <= 49) {
        return "D";
    } else if (mark < 40) {
        return "E";
    } else {
        return "Invalid score";
    }
}

const mark = 80; // Replace with the desired mark
const grade = CalculateMarks(mark);
console.log(`Grade: ${grade}`);


// Solution 2: Check Speed and Calculate Demerit Points
function checkSpeed(speed) {
    const speedLimit = 70;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const difference = speed - speedLimit;
        const demeritPoints = Math.floor(difference / 5);
        console.log("Demerit points:", demeritPoints);
    }
}

const carSpeed = 85; // Replace with the car's speed
checkSpeed(carSpeed);


// Solution 3: Calculate Net Salary
const basicSalary = 10000;
const benefits = 5000;
const taxRate = 0.1;
const nhifRate = 0.2;
const nssfRate = 0.3;

const grossSalary = basicSalary + benefits;
const tax = grossSalary * taxRate;
const nhifDeductions = grossSalary * nhifRate;
const nssfDeductions = grossSalary * nssfRate;
const netSalary = grossSalary - (tax + nhifDeductions + nssfDeductions);

console.log("Gross Salary:", grossSalary);
console.log("Tax:", tax);
console.log("NHIF Deductions:", nhifDeductions);
console.log("NSSF Deductions:", nssfDeductions);
console.log("Net Salary:", netSalary);
