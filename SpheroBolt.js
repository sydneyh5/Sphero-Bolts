//Programming Team: Sydney Hribar and Gabe Westra
//Date: 2.6.2023
//Project: Sphero Bolt Maze

async function blue() {
    await roll ((getHeading() + 0), 73, 2)
    await spin(90, 2)
    setMainLed({ r: 0, g: 0, b: 200 })
}

async function soundOne (){
    await roll ((getHeading() + 0), 50, 2)
    await spin(90, 2)
    await roll ((getHeading() + 0), 30, 2)
    await Sound.Animal.Alligator.play()
}

async function startProgram() {
    await blue()
    await soundOne()
} 
