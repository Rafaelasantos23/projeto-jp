
const result = document.querySelector('.result')

const scoringHuman = document.querySelector('.minhap')
const scoringMachine = document.querySelector('.suap')

let humanNamber = 0
let machineNamber = 0

let image = document.querySelector('.img')


const PlayHuman = ( choiceHuman => {

    PlayTheGame (choiceHuman,Playmachine())
})

const Playmachine = ()  =>{
const choices = ['rock', 'paper', 'scissors']
const radomNamber = Math.floor (Math.random() * 3)

return choices [radomNamber]
}


const PlayTheGame = (human,machine) => {
console.log(' humano: ' +  human  +  ' maquina: ' +  machine)

if(human === machine){
result.innerHTML = 'Empatou!'

image.src = "./assests/sup.png"

}
else if(human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' || 
        human === 'scissors' && machine === 'paper'){
            result.innerHTML = ' Você ganhou!'

            humanNamber++
            scoringHuman.innerHTML = humanNamber

            image.src="./assests/fel.png"



        }
         else {result.innerHTML = ' A Maquina ganhou!'
        
                machineNamber++
                scoringMachine.innerHTML = machineNamber

                image.src ="./assests/assus.png"
        }
    }
