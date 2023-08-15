// QUESTION 1
// Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40

// SOLUTION 1:
// Define a function to calculate grades based on marks
function CalculateMarks(mark) {
    // Check if the mark falls in the A grade range
    if (mark >= 80 && mark <= 100) {
        return "A";
    }
    // Check if the mark falls in the B grade range
    else if (mark >= 60 && mark <= 79) {
        return "B";
    }
    // Check if the mark falls in the C grade range
    else if (mark >= 50 && mark <= 59) {
        return "C";
    }
    // Check if the mark falls in the D grade range
    else if (mark >= 40 && mark <= 49) {
        return "D";
    }
    // Check if the mark is below 40, indicating an E grade
    else if (mark < 40) {
        return "E";
    }
    // If none of the above conditions match, return an "Invalid score" message
    else {
        return "Invalid score";
    }
}

// Define a mark (replace with the actual value you want to test)
const mark = 80; /* your mark value here */

// Calculate the grade using the CalculateMarks function
const grade = CalculateMarks(mark);

// Output the grade
console.log(`Grade: ${grade}`);