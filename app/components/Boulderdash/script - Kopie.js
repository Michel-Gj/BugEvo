// script.js

// Objekte
const OBJEKT = {
    LEER:   {id: 0, abgerundet: false},
    ERDE :   {id: 1, abgerundet: false, verbrauchbar: true},
    STEIN:  {id: 2, abgerundet: true},
    DIAMANT:    {id: 3, abgerundet: true},
    GRENZE: {id: 4, abgerundet: false},
    WAND:   {id: 5, abgerundet: true}
};

const RICHTUNG = {Rechts: 0, Untenrecht: 1, Unten: 2, Untenlinks: 3, Links: 4, Obenlinks: 5, Oben: 6, Obenrechts: 7 };
const RICHTRUNGX =  [1,1,0,-1,-1,-1,0,1];
const RICHTUNGY =   [0,1,1,1,0,-1,-1,-1];