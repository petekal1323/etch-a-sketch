//select the elements canvas shake button.box
//set up canvas for drawing
//write draw function
// write a handler for keys
// clear on shake
//listen for arrow keys


const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shake = document.querySelector('.shake');

const { width, height } = canvas;

//create random x and y starting point on canvas

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;


ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


function draw(options){
console.log(options);

}



function handleKey(e){
    
    if(e.key.includes('Arrow')){
        e.preventDefault();
        draw({
            key: e.key
        })
        console.log(e.key);
        console.log('handling key');
        
        
    }
    
}

window.addEventListener('keydown', handleKey);

