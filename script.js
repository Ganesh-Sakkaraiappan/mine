'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20

let number = Math.trunc(Math.random()*20 + 1);

let score = 20;
let highscore = 0;

const displayMessage = function(message)
{
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function()
{
    const guess = Number(document.querySelector('.guess').value);

    if(!guess)
    {
        //document.querySelector('.message').textContent = 'Atleast try...!'
        displayMessage('Atleast try...!');
    }
    
    else if(guess === number)
    {
        displayMessage('Correct...!');
        if(score > highscore)
        {
            highscore = score;
        }

        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    else if(guess !== number)
    {
        // if(guess > number){document.querySelector('.message').textContent = 'Too High...!';}
        // if(guess < number){document.querySelector('.message').textContent = 'Too Low...!';}
        let result = guess > number ? 'Too High...!' : 'Too Low...!';
        displayMessage(result);
        score--;
        document.querySelector('.score').textContent = score;
        if(score <= 0)
        {
            displayMessage('You Loss...!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// document.querySelector('.again').addEventListener('click',function(){location.reload()});
document.querySelector('.again').addEventListener('click',function()
{
    score = 20;
    number = Math.trunc(Math.random()*20 + 1);
    displayMessage('Start Guessing...!');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value ='';
});