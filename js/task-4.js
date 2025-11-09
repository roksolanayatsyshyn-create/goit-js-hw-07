// ref
const formEl= document.querySelector(".login-form")

// callback
function onSubmit(event){
  event.preventDefault();
const {email, password}=event.currentTarget.elements
  if(email.value.trim()==="" ||password.value.trim()===""){
    return alert ('All form fields must be filled in')
  }

  const userData={
    email:email.value.trim(),
    password:password.value.trim()
  }
  console.log(userData)

event.currentTarget.reset();
}


// listener
formEl.addEventListener("submit", onSubmit)

