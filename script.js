let x = document.getElementsByClassName('container')
console.log(x)
x[0].style.background = "yellow";

x[0].classList.add("background")

z = document.createElement('p');
z.innerText="I am learning javascript"
x[0].appendChild(z)

z2 = document.createElement('p');
z2.innerText = "Hello I am learning different javascript";

// x[0].replaceChild(z2, z);
// Once this line will be executed, the text will be changed.

// this code will change the color of the page everytime the click me button is clicked after 2 seconds
let btn = document.getElementById("button")
const body=document.body;
btn.addEventListener('click', () =>{setTimeout(() => {body.style.background = getRandomColor();}, 2000)});
function getRandomColor(){
    const letters=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let color = '#';
    for(let i =0; i<6; i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
