
// ref
const inputEl=document.querySelector("#name-input");
const nameOutputEl=document.querySelector("#name-output")





// callback
function onInput(event) {
  const value=inputEl.value.trim

  if (value !== "") {
    nameOutputEl.textContent=value;
  }
  else {
    nameOutputEl.textContent="Anonymous"
  } 
}

// listener
inputEl.addEventListener("input",onInput )