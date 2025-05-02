let randomNumber=parseInt(Math.random()*100 + 1);
console.log(randomNumber);

const submit =document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining =document.querySelector('.lastResult');
const  lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess =1;
let guess;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess);
    })
}


function validateGuess(guess){

    if(isNaN(guess)){
        alert('Please enter a valid number !!');
    }else if( guess < 1){
        alert('Please Enter a number greater than 1 !!')
    }else if(guess >100){
        alert('Please Enter a Number between 1 to 100 !!')
    }else{
        prevGuess.push(guess);
        if (numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over!!: Random number was ${randomNumber} `)
            endGame();
        }else{
            displayGuess(guess);
            CheckGuess(guess)
        }
    }

}

function CheckGuess(guess){
    
    if(guess === randomNumber){
        displayMessage('you have guessed the correct number!!....');
    }else if( guess > randomNumber){
        displayMessage('The Guessed Number is Too high');
    }else if(guess < randomNumber){
        displayMessage('The Guessed Number is Too low')
    }
}

function displayGuess(guess){
    userInput.value=" ";
    guessSlot.innerHTML += `${guess} ,`;
    numGuess++;
    remaining.innerHTML=`${11 - numGuess}`;
    

}

function displayMessage(Message){
    lowOrHi.innerHTML=`<h2>${Message}</h2>`;

}

function endGame(){
    
    userInput.value=" ";
    guessSlot.innerHTML='';
    userInput.setAttribute('disabled', '');
    p.classList.add("button");
    p.innerHTML='<h2>Start New Game</h2>';
    startOver.appendChild(p)
    playGame=false;
    newGame();


}

function newGame(){
    const button =document.querySelector('.button');
    button.addEventListener('click', function(e){

        userInput.innerHTML='';
        prevGuess=[];
        numGuess= 1;
        remaining.innerHTML=`${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;

    })
}





