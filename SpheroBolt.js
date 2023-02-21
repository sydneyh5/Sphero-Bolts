//Programming Team: Sydney Hribar and Gabe Westra
//Date: 2.6.2023
//Project: Sphero Bolt Maze

// Blue Checkpoint (The first  checkpoint of the maze/the start)
async function blue() {
    await roll ((getHeading() + 0), 73, 2)
    await spin(90, 2)
    setMainLed({ r: 0, g: 0, b: 200 })
}

//First Sound Checkpoint
async function soundOne (){
    await roll ((getHeading() + 0), 49, 2)
    await spin(90, 2)
    await roll ((getHeading() + 0), 35, 2)
    await Sound.Animal.Alligator.play()
}

//Red Checkpoint
async function red(){
    await spin(45, 2)
    await roll ((getHeading() + 0), 41, 2)
    await spin(270, 2)
    setMainLed({ r: 225, g: 0, b: 0 })
    await roll ((getHeading() + 0), 25, 2)
}

//Second Sound Checkpoint
async function soundTwo(){
    await spin(270, 2)
    await roll ((getHeading() + 0), 40, 2)
    await spin(90, 2)
    await roll ((getHeading() + 0), 31, 2)
    await Sound.Animal.Horse.play()
}

//Green Checkpoint 
async function green(){
    await spin(45, 2)
    await roll ((getHeading() + 0), 23, 2)
    await spin(270, 2)
    setMainLed({ r: 0, g: 250, b: 0 })
    await roll ((getHeading() + 0), 33, 2)
}

//Third Sound Checkpoint 
async function soundThree(){
    await spin (270, 2)
    await roll ((getHeading() + 0), 30, 2)
    await spin (326, 2)
    await roll ((getHeading() + 0), 32, 2)
    await Sound.Animal.Monkey.play()
}

// Purple Checkpoint (The end of the maze)
async function purple(){
    await spin (37, 2)
    await roll ((getHeading() + 0), 40, 2)
    setMainLed({ r: 40, g: 0, b: 200 })
}


async function startProgram() {
    await blue()
    await soundOne()
    await red()
    await soundTwo()
    await green()
    await soundThree()
    await purple()
} 
