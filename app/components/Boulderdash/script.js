// ------------------------------------------------------------------------------------------------

    // display for browser

const container = document.querySelector('.container'); //

// ------------------------------------------------------------------------------------------------

    // helping methods

let KEY = { ENTER: 13, ESC: 27, SHIFT: 16, PAGEUP: 33, PAGEDOWN: 34, W: 87, A: 65, S:83, D:68};

let DIR  = { UP: 0, UPRIGHT: 1, RIGHT: 2, DOWNRIGHT: 3, DOWN: 4, DOWNLEFT: 5, LEFT: 6, UPLEFT: 7 };
let DIRX = [     0,          1,        1,            1,       0,          -1,      -1,        -1 ];
let DIRY = [    -1,         -1,        0,            1,       1,           1,       0,        -1 ];

class Position{
    constructor(x, y, dir){
        this.x = x + (DIRX[dir] || 0);
        this.y = y + (DIRY[dir] || 0);
    }
}

function rotateLeft(dir){
    return (dir - 2) + (dir < 2 ? 8 : 0);
}

function rotateRight(dir){
    return (dir + 2) - (dir > 5 ? 8 : 0);
}

function turnAround(dir){
    return rotateLeft(rotateLeft(dir));
}

function horizontal(dir){
    return (dir === DIR.LEFT) || (dir === DIR.RIGHT);
}

function vertical(dir){
    return (dir === DIR.UP) || (dir === DIR.DOWN); 
}

function timestamp(){
    return new Date().getTime();
}

function randomInt(min, max){
    return Math.floor(min + (Math.random() * (max - min)));
}

// ------------------------------------------------------------------------------------------------

    // objects

const OBJECT = {
    SPACE:             {id: 1,  rounded: false, explodable: false, consumable: true,  image: {path: "./Images/space.png", f: 0}, white: {path: "./Images/white.png", f: 0}},
    DIRT:              {id: 2,  rounded: false, explodable: false, consumable: true,  image: {path: "./Images/dirt.png", f: 0}},
    BRICKWALL:         {id: 3,  rounded: true,  explodable: false, consumable: true,  image: {path: "./Images/brickwall.png", f: 0}},
    PREOUTBOX:         {id: 4,  rounded: false, explodable: false, consumable: false, image: {path: "./Images/steelwall.png", f: 0}},
    OUTBOX:            {id: 5,  rounded: false, explodable: false, consumable: false, image: {path: "./Images/outbox.png", f: 2}},
    STEELWALL:         {id: 6,  rounded: false, explodable: false, consumable: false, image: {path: "./Images/steelwall.png", f: 0}},
    FIREFLY1:          {id: 7,  rounded: false, explodable: true,  consumable: true,  image: {path: "./Images/firefly.png", f: 2}},
    FIREFLY2:          {id: 8,  rounded: false, explodable: true,  consumable: true,  image: {path: "./Images/firefly.png", f: 2}},
    FIREFLY3:          {id: 9,  rounded: false, explodable: true,  consumable: true,  image: {path: "./Images/firefly.png", f: 2}},
    FIREFLY4:          {id: 10, rounded: false, explodable: true,  consumable: true,  image: {path: "./Images/firefly.png", f: 2}},
    BOULDER:           {id: 11, rounded: true,  explodable: false, consumable: true,  image: {path: "./Images/boulder.png", f: 0}},
    BOULDERFALLING:    {id: 12, rounded: false, explodable: false, consumable: true,  image: {path: "./Images/boulder.png", f: 0}},
    DIAMOND:           {id: 13, rounded: true,  explodable: false, consumable: true,  image: {path: "./Images/diamond.png", f: 2}},
    DIAMONDFALLING:    {id: 14, rounded: false, explodable: false, consumable: true,  image: {path: "./Images/diamond.png", f: 2}},
    EXPLODETOSPACE0:   {id: 15, rounded: false, explodable: false, consumable: false, image: {path: "./Images/explosion.png", f: 0}},
    EXPLODETOSPACE1:   {id: 16, rounded: false, explodable: false, consumable: false, image: {path: "./Images/explosion.png", f: 0}},
    EXPLODETOSPACE2:   {id: 17, rounded: false, explodable: false, consumable: false, image: {path: "./Images/explosion.png", f: 0}},
    EXPLODETOSPACE3:   {id: 18, rounded: false, explodable: false, consumable: false, image: {path: "./Images/explosion.png", f: 0}},
    EXPLODETOSPACE4:   {id: 19, rounded: false, explodable: false, consumable: false, image: {path: "./Images/explosion.png", f: 0}},
    EXPLODETODIAMOND0: {id: 20, rounded: false, explodable: false, consumable: false, image: {path: "./Images/explosion.png", f: 0}},
    EXPLODETODIAMOND1: {id: 21, rounded: false, explodable: false, consumable: false, image: {path: "./Images/explosion.png", f: 0}},
    EXPLODETODIAMOND2: {id: 22, rounded: false, explodable: false, consumable: false, image: {path: "./Images/explosion.png", f: 0}},
    EXPLODETODIAMOND3: {id: 23, rounded: false, explodable: false, consumable: false, image: {path: "./Images/explosion.png", f: 0}},
    EXPLODETODIAMOND4: {id: 24, rounded: false, explodable: false, consumable: false, image: {path: "./Images/explosion.png", f: 0}},
    PREROCKFORD1:      {id: 25, rounded: false, explodable: false, consumable: false, image: {path: "./Images/steelwall.png", f: 2}},
    PREROCKFORD2:      {id: 26, rounded: false, explodable: false, consumable: false, image: {path: "./Images/outbox.png", f: 0}},
    PREROCKFORD3:      {id: 27, rounded: false, explodable: false, consumable: false, image: {path: "./Images/steelwall.png", f: 0}},
    PREROCKFORD4:      {id: 28, rounded: false, explodable: false, consumable: false, image: {path: "./Images/prerockford.png", f: 0}},
    BUTTERFLY1:        {id: 29, rounded: false, explodable: true,  consumable: true,  image: {path: "./Images/butterfly.png", f: 2}},
    BUTTERFLY2:        {id: 30, rounded: false, explodable: true,  consumable: true,  image: {path: "./Images/butterfly.png", f: 2}},
    BUTTERFLY3:        {id: 31, rounded: false, explodable: true,  consumable: true,  image: {path: "./Images/butterfly.png", f: 2}},
    BUTTERFLY4:        {id: 32, rounded: false, explodable: true,  consumable: true,  image: {path: "./Images/butterfly.png", f: 2}},
    ROCKFORD:          {id: 33, rounded: false, explodable: true,  consumable: true,  image: {path: "./Images/rockford.png", f: 0},
                                                                                      left: {path: "./Images/left.png", f: 2},
                                                                                      right: {path: "./Images/right.png", f: 2},
                                                                                      blink: {path: "./Images/blink.png", f: 2},
                                                                                      tap: {path: "./Images/tap.png", f: 2},
                                                                                      blinktap: {path: "./Images/blinktap.png", f: 2}}
};

let FIREFLIES = [];
FIREFLIES[DIR.LEFT]  = OBJECT.FIREFLY1;
FIREFLIES[DIR.UP]    = OBJECT.FIREFLY2;
FIREFLIES[DIR.RIGHT] = OBJECT.FIREFLY3;
FIREFLIES[DIR.DOWN]  = OBJECT.FIREFLY4;

let BUTTERFLIES = [];
BUTTERFLIES[DIR.LEFT]  = OBJECT.BUTTERFLY1;
BUTTERFLIES[DIR.UP]    = OBJECT.BUTTERFLY2;
BUTTERFLIES[DIR.RIGHT] = OBJECT.BUTTERFLY3;
BUTTERFLIES[DIR.DOWN]  = OBJECT.BUTTERFLY4;

let PREROCKFORDS = [
    OBJECT.PREROCKFORD1,
    OBJECT.PREROCKFORD2,
    OBJECT.PREROCKFORD3,
    OBJECT.PREROCKFORD4,
    OBJECT.ROCKFORD
];

let EXPLODETOSPACE = [
    OBJECT.EXPLODETOSPACE0,
    OBJECT.EXPLODETOSPACE1,
    OBJECT.EXPLODETOSPACE2,
    OBJECT.EXPLODETOSPACE3,
    OBJECT.EXPLODETOSPACE4,
    OBJECT.SPACE
];

let EXPLODETODIAMOND = [
    OBJECT.EXPLODETODIAMOND0,
    OBJECT.EXPLODETODIAMOND1,
    OBJECT.EXPLODETODIAMOND2,
    OBJECT.EXPLODETODIAMOND3,
    OBJECT.EXPLODETODIAMOND4,
    OBJECT.DIAMOND
];

// ------------------------------------------------------------------------------------------------

    // logic

class Logic{
    constructor(){
        this.storage = window.localStorage || {};
        this.score = 0; // score
        this.index; // cave index
        this.cave; // cave definition
        this.width; // cave width
        this.height; // cave height
        this.cells; // 2 dimensional array
        this.frame; // frame counter
        this.fps; // frames per second
        this.tpf; // time per frame
        this.birth; // rockford birth frame
        this.timer; // time to beat the cave
        this.idle; // for idle animation
        this.white; // white when collected enought diamonds
        this.won; // true by entering outbox
        this.diamonds; // // diamond counter
        this.foundRockford;
    }

    reset(number){
        number = Math.min(CAVES.length - 1, Math.max(0, (typeof number === 'number' ? number : this.storage.level || 0)));
        this.index = this.storage.level = number;
        this.cave = CAVES[3];
        this.width = this.cave.width;
        this.height = this.cave.height;
        this.cells = [];
        this.frame = 0;
        this.fps = 10;
        this.tpf = 1 / this.fps;
        this.birth = 2 * this.fps;
        this.timer = this.cave.caveTime;
        this.idle = {blink: false, tap: false};
        this.white = false;
        this.won = false;
        
        this.diamonds = {
            collected: 0,
            needed: this.cave.diamondsNeeded,
            value:  this.cave.initialDiamondValue,
            extra:  this.cave.extraDiamondValue
        };
        
        for(let y = 0; y < this.height; ++y){
            for(let x = 0; x < this.width; ++x){
                this.cells[y] = this.cells[y] || [];
                this.cells[y][x] = {position: new Position(x, y), frame: 0, object: OBJECT[this.charToObject(this.cave.map[y][x])], element: this.createDOMElement(OBJECT[this.charToObject(this.cave.map[y][x])].image.path)};
            }
        }

        display.onChangeLevel();
    }

    charToObject(type){
        switch(type) {
            case '0': // space
                return 'SPACE';
            case '1': // dirt
                return 'DIRT';
            case '2': // boulder
                return 'BOULDER';
            case '3': // diamond
                return 'DIAMOND';
            case '4': // rockford
                return 'PREROCKFORD1';
            case '5': // butterfly
                return 'BUTTERFLY1';
            case '6': // firefly
                return 'FIREFLY1';
            case '7': // steelwall
                return 'STEELWALL';
            case '8': // brickwall
                return 'BRICKWALL';
            case '9': // outbox
                return 'PREOUTBOX';
            default:
                return null;
        }
    }

    createDOMElement(imagePath){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundImage = `url('${imagePath}')`;
        return cell;
    }

    prev(){
        if(this.index > 0) this.reset(this.index - 1);
    }

    next(){
        if(this.index < CAVES.length - 1) this.reset(this.index + 1);
    }

    get(position, dir){
        return this.cells[position.y + (DIRY[dir] || 0)][position.x + (DIRX[dir] || 0)].object;
    }

    set(position, object, dir){
        let cell = this.cells[position.y + (DIRY[dir] || 0)][position.x + (DIRX[dir] || 0)];
        cell.object = object;
        cell.frame = this.frame;
    }
    
    clear(position, dir){
        this.set(position, OBJECT.SPACE, dir);
    }

    move(position, dir, object){
        this.clear(position);
        this.set(position, object, dir);
    }

    decreaseTimer(number){
        this.timer = Math.max(0, this.timer - (number || 1));
        return (this.timer === 0);
    }

    autoDecreaseTimer(){
        if((this.frame > this.birth) && ((this.frame % this.fps) == 0)) this.decreaseTimer(1);
    }

    runOutTimer(){
        let amount = Math.min(3, this.timer);
        this.increaseScore(amount);
        if(this.decreaseTimer(amount)) this.next();
    }

    collectDiamond(){
      this.diamonds.collected++;
      this.increaseScore(this.diamonds.collected > this.diamonds.needed ? this.diamonds.extra : this.diamonds.value);
    }

    increaseScore(number){
      this.score += number;
    }

    whiteWhenEnoughDiamondsCollected(){
        if(!this.white && (this.diamonds.collected >= this.diamonds.needed)) this.white = this.frame + Math.round(this.fps/5); // white for 1/5s
    }

    loseLevel(){
        this.reset();
    }

    winLevel(){
        this.won = true;
    }

    beginFrame(){
        this.frame++;
        this.idle = moving.dir ? {} : {
            blink: (randomInt(1, 4) == 1) ? !this.idle.blink : this.idle.blink,
            tap: (randomInt(1, 16) == 1) ? !this.idle.tap : this.idle.tap
        }
    }

    endFrame(){
        this.whiteWhenEnoughDiamondsCollected();
        if(this.won) this.runOutTimer();
        else if(this.frame - this.foundRockford > (4 * this.fps)) this.loseLevel();
        else this.autoDecreaseTimer();
    }

    explode(position, dir){
        let position2 = new Position(position.x, position.y, dir);
        let explosion = (this.isbutterfly(position2) ? OBJECT.EXPLODETODIAMOND0 : OBJECT.EXPLODETOSPACE0);
        this.set(position2, explosion);

        if(explosion === OBJECT.EXPLODETODIAMOND0){
            for(let dir2 = 0; dir2 < 8; ++dir2){
                if(this.isrockford(position2, dir2)){
                    let posRockford = new Position(position2.x, position2.y, dir2);
                    for(let dir3 = 0; dir3 < 8; ++dir3){ // every direction
                        if(this.isconsumable(posRockford, dir3)) this.set(posRockford, explosion, dir3);
                    }
                }
            }
        }

        for(dir = 0; dir < 8; ++dir){ // every direction
            if(this.isconsumable(position2, dir)) this.set(position2, explosion, dir);
        }
    }
  
    push(position, dir){
        let position2 = new Position(position.x, position.y, dir);
        if(this.isempty(position2, dir)){
            if(randomInt(1, 8) == 1){
                this.move(position2, dir, OBJECT.BOULDER);
                if(!moving.grab) this.move(position, dir, OBJECT.ROCKFORD);
            }
        }
    }

    // ------------------------------------------------------------------------------------------------

        // boolean methods

    isempty(position,dir){
        let object = this.get(position, dir);
        return OBJECT.SPACE === object;
    }

    isdirt(position,dir){
        let object = this.get(position, dir);
        return OBJECT.DIRT === object;
    }

    isboulder(position, dir){
        let object = this.get(position, dir);
        return OBJECT.BOULDER === object;
    }

    isrockford(position, dir){
        let object = this.get(position, dir);
        return OBJECT.ROCKFORD === object;
    }

    isdiamond(position, dir){
        let object = this.get(position, dir);
        return OBJECT.DIAMOND === object;
    }

    isoutbox(position, dir){
        let object = this.get(position, dir);
        return OBJECT.OUTBOX === object;
    }

    isfirefly(position, dir){
        let object = this.get(position, dir);
        return (OBJECT.FIREFLY1.id <= object.id) && (object.id <= OBJECT.FIREFLY4.id);
    }

    isbutterfly(position, dir){
        let object = this.get(position, dir);
        return (OBJECT.BUTTERFLY1.id <= object.id) && (object.id <= OBJECT.BUTTERFLY4.id);
    }

    isexplodable(position, dir){
        let object = this.get(position, dir);
        return object.explodable;
    }

    isconsumable(position, dir){
        let object = this.get(position, dir);
        return object.consumable;
    }

    isrounded(position, dir){
        let object = this.get(position, dir);
        return object.rounded;
    }

    isfallingdiamond(position, dir){
        let object = this.get(position, dir);
        return OBJECT.DIAMONDFALLING === object;
    }

    isfallingboulder(position, dir){
        let object = this.get(position, dir);
        return OBJECT.BOULDERFALLING === object;
    }

    // ------------------------------------------------------------------------------------------------

        // updating cells

    updateEachCell(){
        this.beginFrame();
        for(let y = 0; y < this.height; y++){
            for(let x = 0; x < this.width; x++){
                this.update(this.cells[y][x]);
            }
        }
        this.endFrame();
    }

    update(cell){
        if(cell.frame < this.frame){
            switch(cell.object){
                case OBJECT.PREROCKFORD1:      this.updatePreRockford(cell.position, 1);       break;
                case OBJECT.PREROCKFORD2:      this.updatePreRockford(cell.position, 2);       break;
                case OBJECT.PREROCKFORD3:      this.updatePreRockford(cell.position, 3);       break;
                case OBJECT.PREROCKFORD4:      this.updatePreRockford(cell.position, 4);       break;
                case OBJECT.ROCKFORD:          this.updateRockford(cell.position, moving.dir); break;
                case OBJECT.BOULDER:           this.updateBoulder(cell.position);              break;
                case OBJECT.BOULDERFALLING:    this.updateBoulderFalling(cell.position);       break;
                case OBJECT.DIAMOND:           this.updateDiamond(cell.position);              break;
                case OBJECT.DIAMONDFALLING:    this.updateDiamondFalling(cell.position);       break;
                case OBJECT.FIREFLY1:          this.updateFirefly(cell.position, DIR.LEFT);    break;
                case OBJECT.FIREFLY2:          this.updateFirefly(cell.position, DIR.UP);      break;
                case OBJECT.FIREFLY3:          this.updateFirefly(cell.position, DIR.RIGHT);   break;
                case OBJECT.FIREFLY4:          this.updateFirefly(cell.position, DIR.DOWN);    break;
                case OBJECT.BUTTERFLY1:        this.updateButterfly(cell.position, DIR.LEFT);  break;
                case OBJECT.BUTTERFLY2:        this.updateButterfly(cell.position, DIR.UP);    break;
                case OBJECT.BUTTERFLY3:        this.updateButterfly(cell.position, DIR.RIGHT); break;
                case OBJECT.BUTTERFLY4:        this.updateButterfly(cell.position, DIR.DOWN);  break;
                case OBJECT.EXPLODETOSPACE0:   this.updateExplodeToSpace(cell.position, 0);    break;
                case OBJECT.EXPLODETOSPACE1:   this.updateExplodeToSpace(cell.position, 1);    break;
                case OBJECT.EXPLODETOSPACE2:   this.updateExplodeToSpace(cell.position, 2);    break;
                case OBJECT.EXPLODETOSPACE3:   this.updateExplodeToSpace(cell.position, 3);    break;
                case OBJECT.EXPLODETOSPACE4:   this.updateExplodeToSpace(cell.position, 4);    break;
                case OBJECT.EXPLODETODIAMOND0: this.updateExplodeToDiamond(cell.position, 0);  break;
                case OBJECT.EXPLODETODIAMOND1: this.updateExplodeToDiamond(cell.position, 1);  break;
                case OBJECT.EXPLODETODIAMOND2: this.updateExplodeToDiamond(cell.position, 2);  break;
                case OBJECT.EXPLODETODIAMOND3: this.updateExplodeToDiamond(cell.position, 3);  break;
                case OBJECT.EXPLODETODIAMOND4: this.updateExplodeToDiamond(cell.position, 4);  break;
                case OBJECT.PREOUTBOX:         this.updatePreOutbox(cell.position);            break;
            }
        }
    }

    updatePreRockford(position, number){
        if(this.frame >= this.birth) this.set(position, PREROCKFORDS[number + 1]);
    }

    updatePreOutbox(position){
        if(this.diamonds.collected >= this.diamonds.needed) this.set(position, OBJECT.OUTBOX);
    }

    updateRockford(position, dir){
        this.foundRockford = this.frame;
        if(this.won){
            // anti movement
        }
        else if(this.timer === 0){
            this.explode(position);
        }
        else if(moving.grab){
            if(this.isdirt(position, dir)){
                this.clear(position, dir);
            }
            else if(this.isdiamond(position, dir) || this.isfallingdiamond(position, dir)){
                this.clear(position, dir);
                this.collectDiamond();
            }
        }
        else if(this.isempty(position, dir) || this.isdirt(position, dir)){
            this.move(position, dir, OBJECT.ROCKFORD);
        }
        else if(this.isdiamond(position, dir)){
            this.move(position, dir, OBJECT.ROCKFORD);
            this.collectDiamond();
        }
        else if(horizontal(dir) && this.isboulder(position, dir)){
            this.push(position, dir);
        }
        else if(this.isoutbox(position, dir)){
            this.move(position, dir, OBJECT.ROCKFORD);
            this.winLevel();
        }
    }

    updateBoulder(position){
        if(this.isempty(position, DIR.DOWN)) this.set(position, OBJECT.BOULDERFALLING);
        else if(this.isrounded(position, DIR.DOWN) && this.isempty(position, DIR.LEFT) && this.isempty(position, DIR.DOWNLEFT)) this.move(position, DIR.LEFT, OBJECT.BOULDERFALLING);
        else if(this.isrounded(position, DIR.DOWN) && this.isempty(position, DIR.RIGHT) && this.isempty(position, DIR.DOWNRIGHT)) this.move(position, DIR.RIGHT, OBJECT.BOULDERFALLING);
    }

    updateBoulderFalling(position){
        if(this.isempty(position, DIR.DOWN)) this.move(position, DIR.DOWN, OBJECT.BOULDERFALLING);
        else if(this.isexplodable(position, DIR.DOWN)) this.explode(position, DIR.DOWN);
        else if(this.isrounded(position, DIR.DOWN) && this.isempty(position, DIR.LEFT) && this.isempty(position, DIR.DOWNLEFT)) this.move(position, DIR.LEFT, OBJECT.BOULDERFALLING);
        else if(this.isrounded(position, DIR.DOWN) && this.isempty(position, DIR.RIGHT) && this.isempty(position, DIR.DOWNRIGHT)) this.move(position, DIR.RIGHT, OBJECT.BOULDERFALLING);
        else this.set(position, OBJECT.BOULDER);
    }

    updateDiamond(position){
        if(this.isempty(position, DIR.DOWN)) this.set(position, OBJECT.DIAMONDFALLING);
        else if(this.isrounded(position, DIR.DOWN) && this.isempty(position, DIR.LEFT) && this.isempty(position, DIR.DOWNLEFT)) this.move(position, DIR.LEFT, OBJECT.DIAMONDFALLING);
        else if(this.isrounded(position, DIR.DOWN) && this.isempty(position, DIR.RIGHT) && this.isempty(position, DIR.DOWNRIGHT)) this.move(position, DIR.RIGHT, OBJECT.DIAMONDFALLING);
    }

    updateDiamondFalling(position){
        if(this.isempty(position, DIR.DOWN)) this.move(position, DIR.DOWN, OBJECT.DIAMONDFALLING);
        else if(this.isexplodable(position, DIR.DOWN)) this.explode(position, DIR.DOWN);
        else if(this.isrounded(position, DIR.DOWN) && this.isempty(position, DIR.LEFT) && this.isempty(position, DIR.DOWNLEFT)) this.move(position, DIR.LEFT, OBJECT.DIAMONDFALLING);
        else if(this.isrounded(position, DIR.DOWN) && this.isempty(position, DIR.RIGHT) && this.isempty(position, DIR.DOWNRIGHT)) this.move(position, DIR.RIGHT, OBJECT.DIAMONDFALLING);
        else this.set(position, OBJECT.DIAMOND);
    }

    updateFirefly(position, dir){
        let newdir = rotateLeft(dir);
        if(this.isrockford(position, DIR.UP) || this.isrockford(position, DIR.DOWN) || this.isrockford(position, DIR.LEFT) || this.isrockford(position, DIR.RIGHT)) this.explode(position);
        else if(this.isempty(position, newdir)) this.move(position, newdir, FIREFLIES[newdir]);
        else if(this.isempty(position, dir)) this.move(position, dir, FIREFLIES[dir]);
        else this.set(position, FIREFLIES[rotateRight(dir)]);
    }

    updateButterfly(position, dir){
        let newdir = rotateRight(dir);
        if(this.isrockford(position, DIR.UP) || this.isrockford(position, DIR.DOWN) || this.isrockford(position, DIR.LEFT) || this.isrockford(position, DIR.RIGHT)) this.explode(position);
        else if(this.isempty(position, newdir)) this.move(position, newdir, BUTTERFLIES[newdir]);
        else if(this.isempty(position, dir)) this.move(position, dir, BUTTERFLIES[dir]);
        else this.set(position, BUTTERFLIES[rotateLeft(dir)]);
    }

    updateExplodeToSpace(position, number){
        this.set(position, EXPLODETOSPACE[number + 1]);
    }

    updateExplodeToDiamond(position, number){
        this.set(position, EXPLODETODIAMOND[number + 1]);
    }
}

// ------------------------------------------------------------------------------------------------

    // display

class Display{
    constructor(){
        this.invalid = {score: true, cave: true};
        this.fps;
        this.tpf;
        this.frame;
    }

    reset(){
        this.fps = 30;
        this.tpf = 1 / this.fps;
        this.frame = 0;
    }
    
    onChangeLevel(){
        this.invalidateCave();
        this.invalidateScore();
    }

    invalidateScore(){
        this.invalid.score = true;
    }

    invalidateCave(){
        this.invalid.cave = true;
    }
    
    invalidateCell(cell){
        cell.invalid = true;
    }
    
    validateScore(){
        this.invalid.score = false;
    }
    
    validateCave(){
        this.invalid.cave = false;
    }
    
    validateCell(cell){
        cell.invalid = false;
    }
  
    updateEachCell(){
        for(let y = 0; y < logic.height; y++){
            for(let x = 0; x < logic.width; x++){
                this.cell(logic.cells[y][x]);
            }
        }
    }

    update(){
        this.frame++;
        //this.score();
        this.updateEachCell();
        this.validateCave();
    }
  
    cell(cell){
        let object = cell.object,
        image = object.image;
        if(this.invalid.cave || cell.invalid || 1 || (image.f > 1) || (object === OBJECT.ROCKFORD)){
            if(object === OBJECT.ROCKFORD) return this.rockford(cell);
            else if((object === OBJECT.SPACE) && (logic.white > logic.frame)) image = OBJECT.SPACE.white;
            this.image(image.path, cell);
            this.validateCell(cell);
        }
    }
  
    rockford(cell){
        if((moving.dir == DIR.LEFT) || (vertical(moving.dir) && (moving.lastXDir == DIR.LEFT))) this.image(OBJECT.ROCKFORD.left.path, cell);
        else if((moving.dir == DIR.RIGHT) || (vertical(moving.dir) && (moving.lastXDir == DIR.RIGHT))) this.image(OBJECT.ROCKFORD.right.path, cell);
        else if(logic.idle.blink && !logic.idle.tap) this.image(OBJECT.ROCKFORD.blink.path, cell);
        else if(!logic.idle.blink && logic.idle.tap) this.image(OBJECT.ROCKFORD.tap.path, cell);
        else if(logic.idle.blink && logic.idle.tap) this.image(OBJECT.ROCKFORD.blinktap.path, cell);
        else this.image(OBJECT.ROCKFORD.image.path, cell);
    }

    image(path, cell){
        cell.element.style.backgroundImage = `url('${path}')`;
    }

    createMap(){
        container.style.gridTemplateRows = `repeat(${logic.height}, 32px)`;
        container.style.gridTemplateColumns = `repeat(${logic.width}, 32px)`;
    
        logic.cells.forEach(row => {
            row.forEach(cell => {
                container.appendChild(cell.element);
            });
        });
    }
}

// ------------------------------------------------------------------------------------------------

    // game loop

class Loop{
    constructor(){
        this.current = this.last = timestamp();
        this.dt = this.gdt = this.rdt = 0;
    }

    frame(){
        this.current = timestamp();
        this.dt = Math.min(1,(this.current - this.last) / 1000); // handle large delta
        this.gdt = this.gdt + this.dt;
        while(this.gdt > logic.tpf){
            this.gdt = this.gdt - logic.tpf;
            logic.updateEachCell();
        }
        this.rdt = this.rdt + this.dt;
        if(this.rdt > display.tpf){
            this.rdt = this.rdt - display.tpf;
            display.update();
        }
        this.last = this.current;
        requestAnimationFrame(this.frame.bind(this));
    }

    load(){
        display.reset(); // reset loaded images
        logic.reset(); // resets the logic
        display.createMap(); // creates the map in html
        this.addEvents(); // key event handlers
        this.frame(); // start the first frame
    }

    addEvents(){
        document.addEventListener('keydown', this.keydown, false);
        document.addEventListener('keyup',   this.keyup,   false);
    }

    keydown(event){
        let handled = false;
            switch(event.keyCode){
            case KEY.W: moving.startUp(); handled = true; break;
            case KEY.S: moving.startDown(); handled = true; break;
            case KEY.A: moving.startLeft(); handled = true; break;
            case KEY.D: moving.startRight(); handled = true; break;
            case KEY.ESC: logic.reset(0); handled = true; break;
            case KEY.PAGEUP: logic.prev(); handled = true; break;
            case KEY.PAGEDOWN: logic.next(); handled = true; break;
            case KEY.SHIFT: moving.startGrab(); handled = true; break;
        }

        if(handled) event.preventDefault(); // prevent scrolling
    }

    keyup(event){
        switch(event.keyCode){
            case KEY.W: moving.stopUp(); break;
            case KEY.S: moving.stopDown(); break;
            case KEY.A: moving.stopLeft(); break;
            case KEY.D: moving.stopRight(); break;
            case KEY.SHIFT: moving.stopGrab(); break;
        }
    }
}

// ------------------------------------------------------------------------------------------------

    // player movement/animation

class Moving{
    constructor(){
        this.dir = DIR.NONE;
        this.lastXDir = DIR.NONE;
        this.up = this.down = this.left = this.right = this.grab = false;
    }
    
    startUp(){
        this.up = true;
        this.dir = DIR.UP;
    }

    startDown(){
        this.down = true;
        this.dir = DIR.DOWN;
    }

    startLeft(){
        this.left = true;
        this.dir = DIR.LEFT;
        this.lastXDir = DIR.LEFT;
    }

    startRight(){
        this.right = true;
        this.dir = DIR.RIGHT;
        this.lastXDir = DIR.RIGHT;
    }

    startGrab(){
         this.grab = true;
    }

    stopUp(){
        this.up = false;
        this.dir = (this.dir == DIR.UP) ? this.where() : this.dir;
    }

    stopDown(){
        this.down = false;
        this.dir = (this.dir == DIR.DOWN) ? this.where() : this.dir;
    }

    stopLeft(){
        this.left = false;
        this.dir = (this.dir == DIR.LEFT)  ? this.where() : this.dir;
    }

    stopRight(){
        this.right = false;
        this.dir = (this.dir == DIR.RIGHT) ? this.where() : this.dir;
    }

    stopGrab(){
        this.grab = false;
    }

    where(){
        if(this.up) return DIR.UP;
        else if(this.down) return DIR.DOWN;
        else if(this.left) return DIR.LEFT;
        else if(this.right) return DIR.RIGHT;
    }
}


// ------------------------------------------------------------------------------------------------

    // caves

    const CAVES = [
        {id: 1, width: 40, height: 22, caveTime: 150, diamondsNeeded: 12, initialDiamondValue: 10, extraDiamondValue: 16, map: [
            ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '0', '1', '1', '3', '1', '2', '0', '1', '1', '1', '1', '1', '2', '1', '2', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '2', '1', '1', '1', '1', '7'],
            ['7', '1', '2', '4', '2', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '3', '1', '1', '2', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '0', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '1', '1', '1', '1', '1', '2', '1', '2', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '7'],
            ['7', '2', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '1', '2', '1', '1', '1', '1', '1', '7'],
            ['7', '2', '1', '2', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '2', '1', '2', '1', '1', '7'],
            ['7', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '2', '1', '0', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '2', '2', '1', '7'],
            ['7', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '1', '1', '1', '2', '1', '1', '2', '1', '7'],
            ['7', '1', '0', '1', '1', '1', '2', '1', '1', '1', '1', '0', '1', '1', '2', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '3', '1', '2', '0', '1', '1', '1', '1', '1', '1', '2', '1', '7'],
            ['7', '1', '1', '3', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '2', '0', '0', '2', '1', '1', '3', '1', '1', '1', '1', '2', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '2', '1', '1', '2', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '1', '2', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '7'],
            ['7', '1', '0', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '0', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '2', '1', '3', '1', '1', '1', '1', '0', '1', '7'],
            ['7', '1', '2', '1', '1', '0', '1', '1', '2', '1', '0', '0', '1', '1', '1', '1', '1', '2', '1', '2', '3', '1', '1', '3', '1', '1', '1', '1', '2', '1', '1', '1', '2', '1', '1', '3', '1', '2', '1', '7'],
            ['7', '1', '3', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '2', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '3', '1', '1', '1', '1', '1', '2', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '1', '1', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '7'],
            ['7', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '3', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '2', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '7'],
            ['7', '2', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '2', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '2', '1', '2', '0', '1', '1', '9', '7'],
            ['7', '1', '2', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '2', '1', '0', '0', '1', '1', '1', '1', '3', '1', '1', '1', '2', '1', '2', '2', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '2', '3', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '2', '1', '2', '3', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '0', '1', '1', '0', '1', '2', '1', '1', '2', '1', '2', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '2', '3', '1', '1', '1', '1', '1', '1', '2', '1', '1', '2', '7'],
            ['7', '1', '3', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '2', '1', '1', '2', '1', '1', '1', '1', '2', '1', '1', '1', '2', '1', '7'],
            ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
        ]},
        
        {id: 2, width: 40, height: 22, caveTime: 150, map: []},
        {id: 3, width: 40, height: 22, caveTime: 150, map: []},

        {id: 4, width: 40, height: 22, caveTime: 120, diamondsNeeded: 36, initialDiamondValue: 5, extraDiamondValue: 20, map: [
            ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
            ['7', '4', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '7'],
            ['7', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '7'],
            ['7', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '7'],
            ['7', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '7'],
            ['7', '1', '1', '2', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '1', '1', '0', '5', '1', '1', '1', '2', '1', '1', '0', '5', '1', '1', '1', '1', '1', '1', '0', '5', '1', '1', '1', '1', '1', '1', '0', '5', '1', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '1', '1', '2', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '0', '0', '1', '2', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '2', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '7'],
            ['7', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '2', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '2', '1', '1', '1', '1', '1', '1', '2', '1', '2', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '1', '1', '7'],
            ['7', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '2', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2', '1', '1', '2', '2', '1', '1', '1', '1', '1', '1', '1', '9', '7'],
            ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']

        ]},

        {id: 5, width: 40, height: 22, caveTime: 150, map: []},
        {id: 6, width: 40, height: 22, caveTime: 150, map: []},
        {id: 7, width: 40, height: 22, caveTime: 150, map: []},
        {id: 8, width: 40, height: 22, caveTime: 150, map: []},
        {id: 9, width: 40, height: 22, caveTime: 150, map: []}
    ];

// ------------------------------------------------------------------------------------------------

    // game activation

let moving = new Moving();
let logic = new Logic();
let display = new Display();
let loop = new Loop();
loop.load();

// ------------------------------------------------------------------------------------------------


/* Sounds
function playAudio(audio){
	const audioElement = new Audio(getAudioPath(audio));
    if(audioElement){
        audioElement.play().catch((error) => {
            console.error(`Error playing audio: ${error}`);
        });
    }
} */