// QUESTION 2:
// Write a program that takes as input the speed of a car e.g 80. 
// If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// Define a function to check the speed and calculate demerit points
function checkSpeed(speed) {
    const speedLimit = 70; // Set the speed limit to 70 km/h

    // Check if the speed is below the speed limit
    if (speed < speedLimit) {
        console.log("Ok"); // Print "Ok" since the speed is within the limit
    } else {
        const difference = speed - speedLimit; // Calculate how much the speed is above the limit
        const demeritPoints = Math.floor(difference / 5); // Calculate demerit points for every 5 km/h above the limit
        console.log("Demerit points:", demeritPoints); // Print the calculated demerit points
    }
}

// Call the function with an example speed
const carSpeed = 85; // Replace this with the desired speed you want to check
checkSpeed(carSpeed); // Call the function to check the speed and calculate demerit points