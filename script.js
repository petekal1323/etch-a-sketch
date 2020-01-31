//select the elements canvas shake button.box
//set up canvas for drawing
//write draw function
// write a handler for keys
// clear on shake
//listen for arrow keys


const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shakeBtn');
const MOVE_AMOUNT = 10;

const { width, height } = canvas;

//create random x and y starting point on canvas

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


function draw({ key }) {
    //increment hue
    hue += 5;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);

    ctx.beginPath();
    ctx.moveTo(x, y);

    switch (key) {
        case 'ArrowUp':
            y = y - MOVE_AMOUNT
            break;
        case 'ArrowRight':
            x = x + MOVE_AMOUNT
            break;
        case 'ArrowDown':
            y = y + MOVE_AMOUNT
            break;
        case 'ArrowLeft':
            x = x - MOVE_AMOUNT
            break;

        default:
            break;
    }



    ctx.lineTo(x, y);
    ctx.stroke();

}



function handleKey(e) {

    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({
            key: e.key
        })
    }
}

//clear /shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener("animationend", function () {
        console.log('you shaked it');
        canvas.classList.remove('shake');
    }, { once: true }
    );
}


window.addEventListener('keydown', handleKey);
shakeBtn.addEventListener('click', clearCanvas);

