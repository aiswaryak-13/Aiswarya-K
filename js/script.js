let nav= document.querySelector(".navbar");
window.onscroll=()=>{
  if(document.documentElement.scrollTop >20){
    nav.classList.add("header-scrolled")
  }else
  {
    nav.classList.remove("header-scrolled");
  }
}

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach((a)=>{
  a.addEventListener("click",()=>{
    navCollapse.classList.remove("show");
  })
})


// form requirements

const form = document.getElementById('form');
const Name = document.getElementById('name');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');
const message = document.getElementById('message');

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorPhn = document.getElementById('error-phone');
const errorMsg = document.getElementById('error-message');

form.addEventListener('submit',(e)=>{
   
  var emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if(Name.value===''||Name.value===null){
    e.preventDefault();
    errorName.innerHTML="Name can't be blank";
  }else if(!/^[A-Za-z]/.test(Name.value)){
    errorName.innerHTML="Enter a valid Name";
  }

  if(!email.value.match(emailCheck)){
    e.preventDefault();
    errorEmail.innerHTML='Valid Email is required';
  }

  if(phoneNumber.value===''||phoneNumber.value===null){
    e.preventDefault();
    errorPhn.innerHTML='Phone Number cannot be empty';
  }

  if(message.value===''||message.value===null){
    e.preventDefault();
    errorMsg.innerHTML='Message cannot be blank';
  }

});