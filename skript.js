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
