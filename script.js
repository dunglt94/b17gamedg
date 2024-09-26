/**
 * Created by nhatnk on 4/26/17.
 */

// function Hero(image, top, left, size){
//     this.image = image;
//     this.top = top;
//     this.left = left;
//     this.size = size;
//
//     this.getHeroElement = function(){
//         return '<img width="'+ this.size + '"' +
//                 ' height="'+ this.size + '"' +
//                 ' src="' + this.image +'"' +
//                 ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
//     }
//
//     this.moveRight = function(){
//         this.left += 20;
//         console.log('ok: ' + this.left);
//     }
// }

class Hero {
    image; top; left; size; speed

    constructor(image, top, left, size, speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed = speed;
    }

    getHeroElement() {
        return `<img width="${this.size}" height="${this.size}" src="${this.image}"
                style="top: ${this.top}px; left: ${this.left}px; position:absolute">`;
    }
    moveRight() {
        this.left += this.speed;
        console.log(`ok: ${this.left}`);
    }
    moveLeft() {
        this.left -= this.speed;
        console.log(`ok: ${this.left}`);
    }
    moveUp() {
        this.top -= this.speed;
        console.log(`ok: ${this.top}`);
    }
    moveDown() {
        this.top += this.speed;
        console.log(`ok: ${this.top}`);
    }
}
let pichu = new Hero('pichu.png', 20, -100, 150, 100);

function start(){
    if (pichu.left < window.innerWidth - pichu.size && pichu.top === 20) {
        pichu.moveRight();
    } else if (pichu.left >= window.innerWidth - pichu.size && pichu.top <= window.innerHeight - pichu.size) {
        pichu.moveDown();
    } else if ( pichu.top >= window.innerHeight - pichu.size && pichu.left >= 100) {
        pichu.moveLeft();
    } else if (pichu.left < 100 && pichu.top >= 0) {
        pichu.moveUp();
    }
    document.getElementById('game').innerHTML = pichu.getHeroElement();
    setTimeout(start, 500)
}


function startGame() {
    start();
}