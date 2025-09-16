const toggleModeBtn = document.getElementById('toggle-mode-btn');
const changeBgBtn = document.getElementById('change-bg-btn');
const hoverFactBtn = document.getElementById('hover-fact-btn');
const addDivBtn = document.getElementById('add-div-btn');
const boxContainer = document.querySelector('.box-container');

// Toggle Dark/Light Mode
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Change Background Color of Existing Divs
changeBgBtn.addEventListener('click', () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.backgroundColor = getRandomColor();
  });
});

// Show Fact on Hover
hoverFactBtn.addEventListener('mouseenter', () => {
  alert(' Fun Fact: Hey this is a hover for fun in javascript.JavaScript was created in just 10 days!');
});

// Add Random Styled Div
addDivBtn.addEventListener('click', () => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('box');
  newDiv.textContent = Box (boxContainer.children.length + 1);
  newDiv.style.backgroundColor = getRandomColor();
  newDiv.style.transform = rotate(Math.floor(Math.random() * 30));
  boxContainer.appendChild(newDiv);
});

 // Utility: Generate a Random Color
 function getRandomColor() {
       const letters = '0123456789ABCDEF';
 let color = '#';
     for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
   return color;
 }
