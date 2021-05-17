//Game Values
let min = 1, max = 10, winningNum = getRandomNum(min, max), guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'), 
    minNum = document.querySelector('.min-num'), 
        maxNum = document.querySelector('.max-num'),
            guessBtn = document.querySelector('#guess-btn'),
                guessInput = document.querySelector('#guess-input'),
                    message = document.querySelector('.message');

//Assign UI Min/Max
minNum.textContent = min

maxNum.textContent = max

//Play Again Event Listener 
game.addEventListener('mousedown', function(e){

    if(e.target.className === 'play-again'){

        window.location.reload();

    }

});

//Listen For Guess
guessBtn.addEventListener('click', function(){

    let guess = parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess < min || guess > max){

        setMessage(`Please Enter A Number Between ${min} And ${max}`, 'red');

    }

    //Check If Won
    if(guess === winningNum){

        gameOver(true, `${winningNum} Is Correct, You Win!`);

    } else {

        //Wrong Number
        guessesLeft -= 1;

        if(guessesLeft === 0){

        //Game Over - Lost

            gameOver(false, `Game Over, You Lost.. The Correct Number Was: ${winningNum}`)

        } else {

            //Change Border Color
            guessInput.style.borderColor = 'red';

           //Game Continues -1 Guess
           setMessage(`${guess} Is Not Correct, ${guessesLeft} Guesses Left..`, 'red'); 

           //Clear Input
           guessInput.value = '';

        }

    }

});

//Game Over
function gameOver(won, msg){

    let color;

    won === true ? color = 'green' : color = 'red';

    //Disable Input
    guessInput.disabled = true;

    //Change Border Color
    guessInput.style.borderColor = color;

    message.style.color = color;

    //Set Message
    setMessage(msg);

    //Play Again
    guessBtn.value = 'Play Again';

    guessBtn.className += 'play-again';

}

//Get Winning Number
function getRandomNum(min, max){

    return Math.floor(Math.random()*(max - min + 1) + min);

}

//Set Message
function setMessage(msg, color){

    message.style.color = color;

    message.textContent = msg;

}