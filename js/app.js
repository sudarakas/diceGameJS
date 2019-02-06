var scores,roundScore,activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-1').textContent = '0';
document.getElementById('score-2').textContent = '0';

document.getElementById('active-1').textContent = '0';
document.getElementById('active-2').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    //generate a random number between 1 and 6
    var dice = Math.floor(Math.random()*6) + 1;

    var diceLoc = document.querySelector('.dice');
    diceLoc.style.display = 'block';
    diceLoc.src = 'resources/dice-' + dice + '.jpeg';

    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#active-' + activePlayer).textContent = roundScore; 
    }
    else{
        shiftPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[(activePlayer-1)] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[(activePlayer-1)];

    if(scores[(activePlayer-1)] >= 100){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
        window.alert('Player ' + activePlayer + ' won the game!');
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-box').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-box').classList.remove('active');
    }

    shiftPlayer();
});

function shiftPlayer(){

    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    roundScore = 0;

    document.getElementById('active-1').textContent = '0';
    document.getElementById('active-2').textContent = '0';

    document.querySelector('.player-1-box').classList.toggle('active');
    document.querySelector('.player-2-box').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}