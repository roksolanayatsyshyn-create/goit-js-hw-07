function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// ref
const buttonEl=document.querySelector("button.change-color")
const spanEl=document.querySelector("span.color")
const bodyEl=document.querySelector("body")

// callback

function onClick(){
  const randomColor=getRandomHexColor()
  bodyEl.style.backgroundColor=randomColor;
spanEl.textContent=randomColor;
}

// listener
buttonEl.addEventListener("click", onClick)