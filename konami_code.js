const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  
  function onKeyDownHandler(e) {
    
    const key = e.key;
    if (key === codes[index]) {
      index++;
    
      if (index === codes.length) {
        alert('Congrats! You found the Konami Code!');
      }
    }
  }
 document.body.addEventListener('keydown', )
 
}