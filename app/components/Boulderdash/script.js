// script.js

// Konstanten
const container = document.querySelector('.container');
const refreshRate = setInterval( rf, 120);

// Spielfeld
const grid = [ // Level 1
    'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b',
    'b', 'e', 'e', 'e', 'e', 'e', 'e', '0', 'e', 'e', 'e', 'e', 's', '0', 'e', 'e', 'e', 'e', 'e', 's', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', '0', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'b',
    'b', 'e', 's', 'p', 's', 'e', 'e', 'e', 'e', 'e', 'e', '0', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', '0', 'e', 'e', 'e', 'e', 'e', '0', 'e', 'e', 'b',
    'b', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', '0', 'e', 'e', '0', 'e', 'e', 'e', 'e', 'e', 's', 'e', 's', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'b',
    'b', 's', 'e', '0', '0', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 's', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'b',
    'b', 's', 'e', 's', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 's', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 's', 'e', 'e', 'b',
    'b', 'e', 'e', 'e', 's', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 's', 'e', '0', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 's', 's', 'e', 'b',
    'b', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'e', 'e', 'e', 's', 'e', 'e', 's', 'e', 'b',
    'b', 'e', '0', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', '0', 'e', 'e', 's', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', '0', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'b',
    'b', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', '0', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', '0', '0', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'b',
    'b', 'e', 'e', 'e', 's', 'e', 'e', 's', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 's', 'e', 's', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'b',
    'b', 'e', '0', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 's', '0', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', '0', 'e', 'b',
    'b', 'e', 's', 'e', 'e', '0', 'e', 'e', 's', 'e', '0', '0', 'e', 'e', 'e', 'e', 'e', 's', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 's', 'e', 'b',
    'b', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 's', 's', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'b',
    'b', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'b',
    'b', '0', '0', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', '0', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'b',
    'b', 's', '0', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 's', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 's', '0', 'e', 'e', 'b', 'b',
    'b', 'e', 's', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 's', 'e', '0', '0', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 's', 's', 'e', 'e', 'e', 'b',
    'b', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', '0', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'b',
    'b', 'e', 'e', 'e', '0', 'e', 'e', '0', 'e', 's', 'e', 'e', 's', 'e', 's', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 's', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 's', 'b',
    'b', 'e', 'e', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 'e', 'e', '0', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', '0', 'e', 's', 'e', 'e', 's', 'e', 'e', 'e', 'e', 's', 'e', 'e', 'e', 's', 'e', 'b',
    'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'
];

// Audio Verweise
const getAudioPath = (audio) => { 
    switch(audio){
		case 'steps':
			return './Music/steps.mp3';
		case 'smacking':
			return './Music/smacking.mp3';
		case 'bang':
			return './Music/bang.mp3';
        default:
            return null;
	}
}

// Bilder Verweise
const getImagePath = (type) => {
    switch (type) {
        case '0': // Leeres Feld
            return './Images/empty.png';
        case 'e': // Erdhaufen
            return './Images/earth.png';
        case 's': // Steinkugel
            return './Images/stone.png';
        case 'b': // Grenzmarkierung
            return './Images/border.png';
        case 'm': // Mauer
            return './Images/wall.png';
        case 'p': // Spieler
            return './Images/player.png';
        default:
            return null;
    }
}

// Grid Größenordnung 
let numZeilen = 22; // Anfangsanzahl der Zeilen
let numSpalten = 40; // Anfangsanzahl der Spalten

// Spieler Variablen
let playerAlife = false;
let player;
let playerCanMove = false;

// Zellen
let zellenArray = new Array(numZeilen).fill(null).map(() => new Array(numSpalten).fill(null)); // Deklaration des Arrays außerhalb der Funktione
let nextZellen = new Array(numZeilen).fill(null).map(() => new Array(numSpalten).fill(null)); // Deklaration des Arrays außerhalb der Funktione


// Hauptfunktion
function main(){
	createGrid();

	// Eventlistener für Tastendruck
	document.addEventListener('keydown', pControl);
}

// Wiederholungen
function rf() {
    zellenArray = nextZellen;
    playerCanMove = true;

    for(i = zellenArray.length - 1; i >= 0; i--){
        zellenArray[i].forEach(zelle => {
			if(zelle.getType() == 's') zelle.move();
		});
    }
}

// Sounds
function playAudio(audio) {
	const audioElement = new Audio(getAudioPath(audio));
    if (audioElement) {
        audioElement.play().catch((error) => {
            console.error(`Error playing audio: ${error}`);
        });
    }
}

// Spielfeld erstellen
function createGrid() {
    container.style.gridTemplateRows = `repeat(${numZeilen}, 32px)`; // 30px für Zeilenhöhe
	container.style.gridTemplateColumns = `repeat(${numSpalten}, 32px)`; // 30px für Spaltenbreite

	for (let zeile = 0; zeile < numZeilen; zeile++) {
        for (let spalte = 0; spalte < numSpalten; spalte++) {
            let tempType = grid[zeile * numSpalten + spalte];
            
            if(tempType == 'p') player = [zeile, spalte];

            const zelle = new Zelle(tempType, zeile, spalte);
            zellenArray[zeile][spalte] = zelle; // Zelle zum Array hinzufügen
        }
    }

    nextZellen = zellenArray;

	// Zellen aus dem Array auf der Webseite anzeigen
    zellenArray.forEach(zeile => {
        zeile.forEach(zelle => {
            container.appendChild(zelle.element);
        });
    });
}

// Zellen
class Zelle{
    constructor(type, y, x) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.blocked = false;
        this.element = this.createDOMElement();
    }

    // DOM Element erstellen
    createDOMElement() {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.classList.add('cell');
        const imagePath = getImagePath(this.type);

        if (imagePath) {
            cell.style.backgroundImage = `url('${imagePath}')`;
        }

        return cell;
    }

    // Gattung ändern
    changeType(type) {
        const imagePath = getImagePath(type);

        if (imagePath) {
            this.type = type;
            this.element.style.backgroundImage = `url('${imagePath}')`;
        }
    }

    // Gattung exportieren
    getType() {
        return this.type;
    }

    // Stein:

    // Stein steht
	setBlocked(){
		this.blocked = true;
	}

    // Stein in Bewegung
    move() {
        if ((this.y + 1) < numZeilen && this.type == 's') {
            if (zellenArray[this.y + 1][this.x].getType() == '0') {
                nextZellen[this.y][this.x].changeType('0');
                nextZellen[this.y + 1][this.x].changeType('s');
				nextZellen[this.y + 1][this.x].setBlocked();
            } else if ((this.x - 1) >= 0 && zellenArray[this.y][this.x - 1].getType() == '0' && zellenArray[this.y + 1][this.x - 1].getType() == '0' && ['s', 'm'].includes(zellenArray[this.y + 1][this.x].getType())) {
                nextZellen[this.y][this.x].changeType('0');
                nextZellen[this.y][this.x - 1].changeType('s');
            } else if ((this.x + 1) < numSpalten && zellenArray[this.y][this.x + 1].getType() == '0' && zellenArray[this.y + 1][this.x + 1].getType() == '0' && ['s', 'm'].includes(zellenArray[this.y + 1][this.x].getType())) {
                nextZellen[this.y][this.x].changeType('ß');
                nextZellen[this.y][this.x + 1].changeType('s');
            } else {
                this.ifBlocked();
            }
        } else {
            this.ifBlocked();
        }
    }

    // Stein Aufprall
    ifBlocked() {
        if (this.blocked && this.type == 's') {
            playAudio('bang');
            this.blocked = false;
        }
    }


    // Player:

    // Prüft auf akzeptierte Bewegung
    pValidBewegung(newY, newX) {
        return newX >= 0 && newY >= 0 && newX < numSpalten && newY < numZeilen && ['e', '0'].includes(zellenArray[newY][newX].getType());
    }

    // Bewegt Spieler
    pBewegung(newY, newX) {
        if(this.type == 'p'){
            if (zellenArray[newY][newX].getType() == 'e') {
                playAudio('smacking');
            } else if (zellenArray[newY][newX].getType() == '0') {
                playAudio('steps');
            }
            
            nextZellen[this.y][this.x].changeType('0');
            nextZellen[newY][newX].changeType('p');
            player[0] = newY;
            player[1] = newX;
            playerCanMove = false;
        }
    }
}

// Spieler Steuerung
function pControl(event) {
    if (playerCanMove) {
        let newX = zellenArray[player[0]][player[1]].x;
        let newY = zellenArray[player[0]][player[1]].y;

        if (event.key === 'ArrowUp') {
            newY--;
        } else if (event.key === 'ArrowLeft') {
            newX--;
        } else if (event.key === 'ArrowDown') {
            newY++;
        } else if (event.key === 'ArrowRight') {
            newX++;
        }

        if (zellenArray[player[0]][player[1]].pValidBewegung(newY, newX)) {
            zellenArray[player[0]][player[1]].pBewegung(newY, newX);
        }
    }
}

main();