var typed = new Typed(".multiple-text", {
    strings: ["Students", "Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})

// Script.Js

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
})
