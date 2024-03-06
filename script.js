const result = document.querySelector('.result')

const scoringHuman = document.querySelector('.minhap')
const scoringMachine = document.querySelector('.suap')

let humanNamber = 0
let machineNamber = 0

let image = document.querySelector('.img')

const choiceMachine = document.querySelector('.choiceMachine')
const choiceHuman1 = document.querySelector('.choicehuman1')


const PlayHuman = (choiceHuman => {

    PlayTheGame(choiceHuman, Playmachine())

})

const Playmachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const radomNamber = choices[Math.floor(Math.random() * choices.length)]

    if (radomNamber == 'rock') {
        choiceMachine.innerHTML = "A maquina escolheu : rock";
    }

    if (radomNamber == 'paper') {
        choiceMachine.innerHTML = "A maquina escolheu  : paper";
    }

    if (radomNamber == 'scissors') {
        choiceMachine.innerHTML = "A maquina escolheu  : scissors";
    }


    return radomNamber
}


const PlayTheGame = (human, machine) => {
    console.log(' humano: ' + human + ' maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Empatou!'

        image.src = "./assests/sup.png"

    }
    else if (human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper') {
        result.innerHTML = ' Você ganhou!'

        humanNamber++
        scoringHuman.innerHTML = humanNamber

        image.src = "./assests/fel.png"



    }
    else {
        result.innerHTML = ' A Maquina ganhou!'

        machineNamber++
        scoringMachine.innerHTML = machineNamber

        image.src = "./assests/assus.png"
    }
}