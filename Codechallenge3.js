// QUESTION 3
// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
// NB: Use KRA, NHIF, and NSSF values provided in the link below.

// Calculate Net Salary

// Input
const basicSalary = 10000; // Given basic salary
const benefits = 5000; // Given benefits

// Constants
const taxRate = 0.1; // Tax rate of 10%
const nhifRate = 0.2; // NHIF rate of 20%
const nssfRate = 0.3; // NSSF rate of 30%

// Calculate Gross Salary
const grossSalary = basicSalary + benefits;

// Calculate Tax
const tax = grossSalary * taxRate;

// Calculate NHIF Deductions
const nhifDeductions = grossSalary * nhifRate;

// Calculate NSSF Deductions
const nssfDeductions = grossSalary * nssfRate;

// Calculate Net Salary
const netSalary = grossSalary - (tax + nhifDeductions + nssfDeductions);


console.log("Gross Salary:", grossSalary);
console.log("Tax:", tax);
console.log("NHIF Deductions:", nhifDeductions);
console.log("NSSF Deductions:", nssfDeductions);
console.log("Net Salary:", netSalary);


// OUTPUT RESULT
// Gross Salary: 15000
// Tax: 1500
// NHIF Deductions: 3000
// NSSF Deductions: 4500
// Net Salary: 6000