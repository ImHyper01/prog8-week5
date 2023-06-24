const k = 3
const machine = new kNear(k)


function leerRock(){
    machine.learn(webcamdata, 'Rock')
    log.innerText = `learning Rock`
}

function leerPaper(){
    machine.learn(webcamdata, 'Paper')
    log.innerText = `learning Paper`
}

function leerScissors(){
    machine.learn(webcamdata, 'Scissors')
    log.innerText = `learning Scissors`
}

function predict () {
    let prediction = machine.classify(webcamdata)
    console.log(`I think it's a ${prediction}`)
    log.innerText = `I thinks it's a ${prediction}`
}


