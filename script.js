let fields = [];

let attempt = 0;
let gameOver = false;
let currentShape = 'cross';

function fillShape(id) {
    if(!fields[id] && !gameOver) { // check: field occupied and gameOver
        if(currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactiv');
            document.getElementById('player-1').classList.add('player-inactiv');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactiv');
            document.getElementById('player-2').classList.add('player-inactiv');
        }
    
        fields[id] = currentShape; // cross or circle "pushed" in array
        console.log(fields);
        draw();
        checkForWin();
        checkForUndecided();
    }
}

function draw() { // set circle or cross
    for(let i=0; i < fields.length; i++) {
        if(fields[i] == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('d-none');
        } 
        if(fields[i] == 'cross') {
            document.getElementById(`cross-${i}`).classList.remove('d-none');
        } 
    }
}

function checkForWin() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal lines
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical lines
        [0, 4, 8], [2, 4, 6] // Diagonal lines
    ];
  
    for (let [a, b, c] of winningConditions) { // a b and c represent the 3 numbers in the array: winningConditions
      if (fields[a] === fields[b] && fields[b] === fields[c] && fields[a]) { // the occupied fields are checked
        console.log('GEWONNEN:', fields[a]); // if fields[a] is a cross or a circle, this will be returned

        animationWinLines(a,b,c);
        setGameOver();     
      }
    }
}

function animationWinLines(a,b,c) { // a b and c represent the 3 numbers in the array: winningConditions
    if (a == 0 && b == 1 && c == 2) { // Horizontal lines
        document.getElementById('line-0').style.transform = 'scaleX(1.0)';
    } else if (a == 3 && b == 4 && c == 5) {
        document.getElementById('line-1').style.transform = 'scaleX(1.0)';
    } else if (a == 6 && b == 7 && c == 8) {
        document.getElementById('line-2').style.transform = 'scaleX(1.0)';
    } else if (a == 0 && b == 3 && c == 6) { // Vertical lines
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1.0)';
    } else if (a == 1 && b == 4 && c == 7) {
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1.0)';
    } else if (a == 2 && b == 5 && c == 8) {
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1.0)';
    } else if (a == 0 && b == 4 && c == 8) { // Diagonal lines
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1.1)';
    } else if (a == 2 && b == 4 && c == 6) {
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1.1)';
    }
}

function checkForUndecided() {
    attempt++;

    // check if all squares are occupied but no player has won
    if (attempt === 9 && !checkForWin()) {
        setGameOver();
    }
}

function setGameOver() {
    gameOver = true;
    setTimeout(function(){
        document.getElementById('game-over').classList.remove('d-none');
    }, 100);
}

function restart() {
    gameOver = false;
    document.getElementById('game-over').classList.add('d-none');

    for(let i=0; i < fields.length; i++) {
        document.getElementById(`circle-${i}`).classList.add('d-none');
        document.getElementById(`cross-${i}`).classList.add('d-none');
    }

    attempt = 0; // reset attempt
    fields = []; // reset array fields
    resetAnimationWinLines();
}

function resetAnimationWinLines(){
    document.getElementById('line-0').style.transform = 'scaleX(0)';
    document.getElementById('line-1').style.transform = 'scaleX(0)';
    document.getElementById('line-2').style.transform = 'scaleX(0)';
    document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(0)';
    document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(0)';
    document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(0)';
    document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(0)';
    document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(0)';
}