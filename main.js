const d = document;
const tablero = d.querySelector("#gameboard");
const player = d.querySelector("#player");
const infoDisplay = d.querySelector("#info-display");

const width = 8;


//array con las posiciones
const startPieces = [
    torre, caballo, alfil, reyna, rey, alfil, caballo, torre,
    peon, peon, peon, peon, peon, peon, peon, peon,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    peon, peon, peon, peon, peon, peon, peon, peon,
    torre, caballo, alfil, reyna, rey, alfil, caballo, torre
]

function crearTablero(){
    startPieces.forEach((startPieces) => {
        const cuadrado = d.createElement('div');
        cuadrado.classList.add('cuadrado');
        cuadrado.classList.add('beige');
        tablero.append(cuadrado);
    })
}
crearTablero();