// script.js

// Konstanten
const container = document.querySelector('.container');
const refreshRate = setInterval( rf, 120);
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

const getAudio = (audio) => { 
    switch(audio){
		case 'steps':
			return '../../../Music/steps.mp3';
		case 'smacking':
			return '../../../Music/smacking.mp3';
		case 'bang':
			return '../../../Music/bang.mp3';
        default:
            return null;
	}
}

// Verschiedene Variablen
let numZeilen = 22; // Anfangsanzahl der Zeilen
let numSpalten = 40; // Anfangsanzahl der Spalten
let playerAlife = false;
let player;
let playerCanMove = false;

// Arrays
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
			if(zelle.getType() == 'stein') zelle.move();
		});
    }
}

// Sounds
function playAudio(audio) {
	const audioElement = new Audio(getAudio(audio));
    if (audioElement) {
        audioElement.play().catch((error) => {
            console.error(`Error playing audio: ${error}`);
        });
    }
}

// Spielfeld
function createGrid() {
    container.style.gridTemplateRows = `repeat(${numZeilen}, 32px)`; // 30px für Zeilenhöhe
	container.style.gridTemplateColumns = `repeat(${numSpalten}, 32px)`; // 30px für Spaltenbreite

	for (let zeile = 0; zeile < numZeilen; zeile++) {
        for (let spalte = 0; spalte < numSpalten; spalte++) {
            let tempTypeChar = grid[zeile * numSpalten + spalte];
            let tempTypeString = 'empty';

            switch(tempTypeChar){
                case '0':
                    tempTypeString = 'empty';
                    break;
                case 'e':
                    tempTypeString = 'erde';
                    break;
                case 's':
                    tempTypeString = 'stein';
                    break;
                case 'b':
                    tempTypeString = 'border';
                    break;
                case 'm':
                    tempTypeString = 'mauer';
                    break
                case 'p':
                    tempTypeString = 'guy';
                    player = [zeile, spalte];
                    break;
            }

            const zelle = new Zelle(tempTypeString, zeile, spalte);
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

    createDOMElement() {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.classList.add('cell');
        const imagePath = this.getImagePath(this.type);

        if (imagePath) {
            cell.style.backgroundImage = `url('${imagePath}')`;
        }

        return cell;
    }

    getImagePath(type) {
        switch (type) {
            case 'empty':
                return '../../../Images/empty.png';
            case 'erde':
                return '../../../Images/erde.png';
            case 'stein':
                return '../../../Images/stein.png';
            case 'mauer':
                return '../../../Images/mauer.png';
            case 'border':
                return '../../../Images/border.png';
            case 'guy':
                return '../../../Images/guy.png';
            default:
                return ;
        }
    }

    changeType(type) {
        const imagePath = this.getImagePath(type);

        if (imagePath) {
            this.type = type;
            this.element.style.backgroundImage = `url('${imagePath}')`;
        }
    }

    getType() {
        return this.type;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }


    // Stein

	setBlocked(){
		this.blocked = true;
	}

    move() {
        if ((this.y + 1) < numZeilen && this.type == 'stein') {
            if (zellenArray[this.y + 1][this.x].getType() == 'empty') {
                nextZellen[this.y][this.x].changeType('empty');
                nextZellen[this.y + 1][this.x].changeType('stein');
				nextZellen[this.y + 1][this.x].setBlocked();
            } else if ((this.x - 1) >= 0 && zellenArray[this.y][this.x - 1].getType() == 'empty' && zellenArray[this.y + 1][this.x - 1].getType() == 'empty' && ['stein', 'mauer'].includes(zellenArray[this.y + 1][this.x].getType())) {
                nextZellen[this.y][this.x].changeType('empty');
                nextZellen[this.y][this.x - 1].changeType('stein');
            } else if ((this.x + 1) < numSpalten && zellenArray[this.y][this.x + 1].getType() == 'empty' && zellenArray[this.y + 1][this.x + 1].getType() == 'empty' && ['stein', 'mauer'].includes(zellenArray[this.y + 1][this.x].getType())) {
                nextZellen[this.y][this.x].changeType('empty');
                nextZellen[this.y][this.x + 1].changeType('stein');
            } else {
                this.ifBlocked();
            }
        } else {
            this.ifBlocked();
        }
    }

    ifBlocked() {
        if (this.blocked && this.type == 'stein') {
            playAudio('bang');
            this.blocked = false;
        }
    }


    // Guy

    // Prüft auf akzeptierte Bewegung
    pValidBewegung(newY, newX) {
        return newX >= 0 && newY >= 0 && newX < numSpalten && newY < numZeilen && ['erde', 'empty'].includes(zellenArray[newY][newX].getType());
    }

    // Bewegt Spieler
    pBewegung(newY, newX) {
        if(this.type == 'guy'){
            if (zellenArray[newY][newX].getType() == 'erde') {
                playAudio('smacking');
            } else if (zellenArray[newY][newX].getType() == 'empty') {
                playAudio('steps');
            }
            
            nextZellen[this.y][this.x].changeType('empty');
            nextZellen[newY][newX].changeType('guy');
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