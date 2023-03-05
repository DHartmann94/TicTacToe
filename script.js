let fields = [];

let currentShape = 'cross';

function fillShape(id) {
    if(!fields[id]) {
        if(currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactiv');
            document.getElementById('player-1').classList.add('player-inactiv');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactiv');
            document.getElementById('player-2').classList.add('player-inactiv');
        }
    
        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}

function draw() {
    for(let i=0; i < fields.length; i++) {
        if(fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        } 
        if(fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        } 
    }
}

/*function checkForWin() {
    let winner;

    // Check horizontal lines
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
    }

    // Check vertical lines
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
    }

    // Check diagonal lines
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0]; 
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
    }

    if(!!winner) {
        console.log('GEWONNEN', winner);
    }
    
}*/

function checkForWin() {
    let winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal lines
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical lines
        [0, 4, 8], [2, 4, 6] // Diagonal lines
    ];
  
    for (let [a, b, c] of winningConditions) { // a b und c repräsentieren die 3 Zahlen im array winningConditions
      if (fields[a] == fields[b] && fields[b] == fields[c] && fields[a]) { // die belegten Felder werden überprüft
        console.log('GEWONNEN', fields[a]); // wenn fields[a] kreuz oder kreis ist, wird dieser ausgegeben
        //return fields[a];
      }
    }
  
    //return null;
}