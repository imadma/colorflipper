const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const mainbg = document.getElementById("mainbg")

const change =()=> {
    const randomhex =  `#${hex[Math.floor(Math.random()*hex.length)]}${hex[Math.floor(Math.random()*hex.length)]}${hex[Math.floor(Math.random()*hex.length)]}${hex[Math.floor(Math.random()*hex.length)]}${hex[Math.floor(Math.random()*hex.length)]}${hex[Math.floor(Math.random()*hex.length)]}`
     mainbg.style.backgroundColor = randomhex;
     color.textContent = randomhex;
 }

btn.addEventListener("click", change);

