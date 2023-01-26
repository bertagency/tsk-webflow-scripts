

  
  //Mobile Menu 
document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('#link-mobile-ideas').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('#menu-column-two-mobile').forEach(target => target.classList.add('show-ideas'));
    document.querySelectorAll('#ideas-mobile-menu').forEach(target => target.classList.add('show-ideas')); 
    });
 });
});

document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('#link-mobile-projects').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('#menu-column-two-mobile').forEach(target => target.classList.add('show-projects'));
    document.querySelectorAll('#projects-mobile-menu').forEach(target => target.classList.add('show-projects')); 
    });
 });
});

document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('#link-mobile-sectors').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('#menu-column-two-mobile').forEach(target => target.classList.add('show-sectors'));
    document.querySelectorAll('#sectors-mobile-menu').forEach(target => target.classList.add('show-sectors')); 
    });
 });
});

document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('#link-mobile-sectors').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('#menu-column-two-mobile').forEach(target => target.classList.add('show-sectors'));
    document.querySelectorAll('#sectors-mobile-menu').forEach(target => target.classList.add('show-sectors')); 
    });
 });
});

document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('#link-mobile-services').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('#menu-column-two-mobile').forEach(target => target.classList.add('show-services'));
    document.querySelectorAll('#services-mobile-menu').forEach(target => target.classList.add('show-services')); 
    });
 });
});

document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('#back-menu-button, #close-menu-mobile,#closemenu-inside').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    document.querySelectorAll('#menu-column-two-mobile').forEach(target => target.classList.remove('show-ideas'));
    document.querySelectorAll('#menu-column-two-mobile').forEach(target => target.classList.remove('show-projects'));
    document.querySelectorAll('#menu-column-two-mobile').forEach(target => target.classList.remove('show-sectors'));
    document.querySelectorAll('#menu-column-two-mobile').forEach(target => target.classList.remove('show-services'));
    document.querySelectorAll('#ideas-mobile-menu').forEach(target => target.classList.remove('show-ideas'));
    document.querySelectorAll('#projects-mobile-menu').forEach(target => target.classList.remove('show-projects'));
    document.querySelectorAll('#sectors-mobile-menu').forEach(target => target.classList.remove('show-sectors'));
    document.querySelectorAll('#services-mobile-menu').forEach(target => target.classList.remove('show-services')); 
    });
 });
});

