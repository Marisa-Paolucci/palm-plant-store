const mobileMenuTrigger = document.getElementById('mobileMenuTrigger')
const mobileMenu = document.querySelector('.nav-links-container');

mobileMenuTrigger.addEventListener('click', () =>
{
   mobileMenu.classList.toggle('active');
   mobileMenuTrigger.classList.toggle('active'); 

   //Toggle Aria-Expanded Attribute True / False
   if(mobileMenu.classList.contains('active')) {
      mobileMenuTrigger.setAttribute('aria-expanded', 'true');
   } else {
      mobileMenuTrigger.setAttribute('aria-expanded', 'false');
   }
});

//Skip Link 
var skipLink = document.querySelector('.skip-link');
skipLink.addEventListener('click', function (e) {
   document.querySelector(skipLink.getAttribute('href')).focus();
});

//Accordion
document.querySelectorAll('.accordion-button').forEach(button => {
   button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle('accordion-button--active');

      if (button.classList.contains('accordion-button--active')) {
         accordionContent.style.maxHeight = accordionContent.scrollHeight + 'em';
       } else {
         accordionContent.style.maxHeight = 0;
      }
   });

});

//Countdown Clock
var countDownDate = new Date("Sep 9, 2023 00:00:00").getTime();
var x = setInterval(function(){
   var now = new Date().getTime();
   var distance = countDownDate - now;

   var days = Math.floor(distance / (1000 * 60 * 60 *24));
   var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;

   if(distance < 0){
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
   }

},1000);

//Converter

const inputs = document.querySelectorAll(".converter-container input");
const f = document.querySelector("#candle");
const l = document.querySelector("#lux")

inputs.forEach(input => {
   input.addEventListener("input", e => {
      const unit = e.target.id;
      const v = parseInt(e.target.value);
      if(unit === "candle") {
         l.value = parseFloat(v * 10.764).toFixed(4) * 1;  
      }
      else if(unit === "lux") {
         f.value = parseFloat(v / 10.764).toFixed(4) *1;
      }
   })
});

//Quote Generator API

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url){
   const response = await fetch(url);
   var data = await response.json();
   quote.innerHTML = data.content;
   author.innerHTML = data.author;
}

getQuote(api_url);

//Email Validation

let emailId = document.getElementById("email");
let errorMsg = document.getElementById("error-msg");
let validMsg = document.getElementById("valid-msg");
let mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function checker(){
   if(emailId.value.match(mailRegex)){
      errorMsg.style.display = 'none';
      validMsg.style.display = 'block';
      emailId.style.border = '2px solid #2ecc71'
   }

   else if(emailId.value == ""){
      errorMsg.style.display = 'none';
      emailId.style.border = '2px solid #d1d3d4';
   }

   else{
      errorMsg.style.display = 'block';
      validMsg.style.display = 'none';
      emailId.style.border = '2px solid #ff2851';
   }


}


//Contact Form Error Messages

function showError(errorElement, errorMessage){
   document.querySelector("."+errorElement).classList.add("display-error");
   document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError(){
   let errors = document.querySelectorAll(".error");
   for(let error of errors){
      error.classList.remove("display-error");
   }
}

let form = document.forms['contact-us'];
form.onsubmit = function(event){

   clearError();

   if(form.email.value === ""){
      showError("email-error", "Please enter your email");
      return false;
   }

   event.preventDefault();
}