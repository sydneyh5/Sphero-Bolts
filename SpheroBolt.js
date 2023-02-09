//Programmer: Sydney Hribar
//Date: 2.6.2023
//Project: Sphero Bolt

/**
 * Hello world practice program
 * LED turn to blue
 * Forward for 2 seconds at a speed of 60
*/
async function helloWorld() {
 await speak("Hello World", true);
 setMainLed({ r: 0, g: 0, b: 255});
 setSpeed(60);
 await delay (2);
 setSpeed(0);

}

/**
 * ninetyDegree function goes forward for a specified amount of time and speed
 * pausing, turning 90degrees clockwise then moving forward for a specific amount
 * of speed and time
*/
async function ninetyDegree() {
    await roll((getHeading() + 0), 60, 4); // Heading 0 degrees at 60 speed for 4 seconds
    await delay(1);
    await roll((getHeading() + 90), 60, 4); // heading 90 degrees at 60 speed for 4 seconds
}
/**
 * The function goes forward for 2 seconds at the speed of 50
 * It turns 90 degrees 
 * Then it repeats that untill a square is created
*/
async function square() {
    await roll ((getHeading() + 0), 50, 2);
    await spin(90, 2);
    await roll ((getHeading() + 0), 50, 2);
    await spin(90, 2);
    await roll ((getHeading() + 0), 50, 2);
    await spin(90, 2);
    await roll ((getHeading() + 0), 50, 2);
    await spin(90, 2);
    await roll ((getHeading() + 0), 50, 2);
}

/**
 * startProgram function sends the program to your Sphero Bolt
*/
async function startProgram() {
    await ninetyDegree()  //<--Calling the ninetyDegree function to run it
}
