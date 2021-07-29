
const ROCK = "Rock";
const PAPPER = "Papper";
const SCISSORS = "Scissors";

const TIE = 0;
const WIN = 1;
const LOSE = 2;

const rockbuttom = document.getElementById ("Rock");
const papperbuttom = document.getElementById ("Papper");
const scissorsbuttom = document.getElementById ("Scissors");
const resultText = document.getElementById ("start-text"); 
const userImg = document.getElementById ("user-img");
const machineImg = document.getElementById ("machine-img");

rockbuttom.addEventListener("click", ()=> {
    play(ROCK);
}); 
papperbuttom.addEventListener("click", ()=> {
    play(PAPPER);
}); 
scissorsbuttom.addEventListener("click", ()=> {
    play(SCISSORS);
}); 

function play(userOption) {

    userImg.src = "./Img/"+userOption+".png"; 

    setTimeout (function name(params) {  

        const machineOption = calcMachineOption();
        const result = calcResult (userOption, machineOption); 
    
        userImg.src = "./Img/"+userOption+".png";  
        machineImg.src = "./Img/"+machineOption+".png"; 
    
        switch (result){
            case TIE:
                resultText.innerHTML = "Empate";
                break;
            case WIN:
                resultText.innerHTML = "Ganaste";
                break;
            case LOSE:
                resultText.innerHTML = "Perdiste";
                break;
        }
        
    },1500); 

   
}

function calcMachineOption() {
    const number = Math.floor(Math.random()*3)
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPPER;
        case 2:
            return SCISSORS;

    }
    
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption){
        return TIE; 
    
    } else if (userOption === ROCK){

        if(machineOption === PAPPER) return LOSE;
        if(machineOption === SCISSORS) return WIN;

    } else if (userOption === PAPPER){

        if(machineOption === SCISSORS) return LOSE;
        if(machineOption === ROCK) return WIN;

    } else if (userOption === SCISSORS){

        if(machineOption === ROCK) return LOSE;
        if(machineOption === PAPPER) return WIN;
    }
    
}