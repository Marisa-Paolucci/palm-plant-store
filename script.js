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
   
   if(form.name.value === ""){
      showError("name-error", "Please enter your name");
      return false;
   }

   if(form.email.value === ""){
      showError("email-error", "Please enter your email");
      return false;
   }

   if(form.message.value === ""){
      showError("message-error", "Please enter a message");
      return false;
   }

   event.preventDefault();
}