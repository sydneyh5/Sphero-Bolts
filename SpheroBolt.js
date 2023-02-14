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
    await roll ((getHeading() + 0), 38, 2)
    await Sound.Animal.Alligator.play()
}

async function red(){
    await spin(40, 2)
    await roll ((getHeading() + 0), 40, 2)
    await spin(270, 2)
    setMainLed({ r: 225, g: 0, b: 0 })
    await roll ((getHeading() + 0), 25, 2)
}

async function soundTwo(){
    await spin(270, 2)
    await roll ((getHeading() + 0), 39, 2)
    await spin(90, 2)
    await roll ((getHeading() + 0), 27, 2)
    await Sound.Animal.HorseGallop.play()
}

async function startProgram() {
    await blue()
    await soundOne()
    await red()
    await soundTwo()
} 
