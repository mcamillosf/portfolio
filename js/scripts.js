/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  function navbarShrink() {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    } else if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 72,
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  const form = document.querySelector('#contactForm');
  const submit = document.querySelector('#submit-form');
  const divSuccess = document.createElement('div');
  const msgError = document.createElement('div');
  msgError.setAttribute('id', 'msgErro');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');
  const message = document.querySelector('#message');
  const divEmail = document.querySelector('#divEmail');

  submit.disabled = true;
  let pass;
  
  function emailValid(email) {
    const valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const validated = valid.test(String(email).toLocaleLowerCase());
    if (validated) {
      document.getElementById('email').style.borderColor = '';
      pass = validated;
      if (msgError.innerHTML != '') {
        msgError.innerHTML = '';
      }
      return validated;
    } else {
      document.getElementById('email').style.borderColor = 'red';
      pass = validated;
      msgError.innerHTML = "Please, type a valid email adress.";
      divEmail.appendChild(msgError);
      return validated;
    }
  }
  
  function checkInput() {
    emailValid(email.value);
    if (name.value !== '' && email.value !== '' && phone.value !== '' && message.value !== '') {
      divSuccess.innerHTML = "Form submission successful!";
      submit.disabled = false;
    } else if (name.value === '' && email.value === '' && phone.value === '' && message.value === '') {
      msgError.parentNode.removeChild(msgError);
      document.getElementById('email').style.borderColor = '';
    } else if (name.value === '' || email.value === '' || phone.value === '' || message.value === '') {
      submit.disabled = true;
    } else {
      // E se não for nem uma das 3???
      alert("Erro na função checkInput");
    }
  }

  name.addEventListener("keyup", checkInput);
  email.addEventListener('keyup', checkInput);
  phone.addEventListener('keyup', checkInput);
  message.addEventListener('keyup', checkInput);
  

  submit.addEventListener('click', function() {
    form.appendChild(divSuccess);
    setTimeout(function() {
        submit.disabled = true;
        form.reset();
      }, 10);
    setTimeout(function() {
      divSuccess.style.display = "none"
    }, 5000);
  });
});
