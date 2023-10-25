const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//Exercise 1

const para = document.createElement(`p`);

para.textContent = `Hi, I´m red!`;
para.style.color = `red`;

container.appendChild(para);
//-----

//Exercise 2
const head3 = document.createElement(`h3`);

head3.textContent = `Hi, I´m an blue h3`;
head3.style.color = `blue`;

container.appendChild(head3);
//-----

//Exercise 3
const diver = document.createElement(`div`);

diver.style.border = `2px solid black`;
diver.style.background = `pink`;

container.appendChild(diver);
//-----

//Exercise 4
const h1er = document.createElement(`h1`);
h1er.textContent = `I´m in an DIV`
diver.appendChild(h1er);

const para2 = document.createElement(`p`);
para2.textContent = `ME TOO!`;
diver.appendChild(para2);
//-----

//Button script method two
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
//-----

//Button script method three
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    alert("Hello World");
})
//-----

//Extended exercises js
function alertFunction() {
    alert("YAY! YOU DID IT!");
}
//Method 2 extend
btn.onclick = alertFunction;

//Method 3 extend
btn.addEventListener("Click", alertFunction);
//-----

btn.addEventListener("click", function(e) {
    e.target.style.background = "blue";
})