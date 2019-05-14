



// nav
const logo = document.querySelector('.logo-heading')
const navBar = document.querySelector('.main-navigation')
const navItems = document.querySelectorAll('.nav-link')

navItems.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    });
});


logo.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'yellow';
});

logo.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'white';
});

logo.addEventListener('copy', (event) => {
    event.target.textContent = "Copied..."
});

// header
const Images = document.querySelectorAll("img");
const headerTwos = document.querySelectorAll("h2");

Images[0].addEventListener('click', (event) => {
    Images.forEach((element) => {
        element.style.filter="invert(100%)";
    });

    logo.textContent = "Horror Bus"
    headerTwos[0].textContent = "Welcome to Horror Bus!"
    document.body.style.background = "darkgrey";
    navBar.style.background = "red";
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const body = document.body;
      
body.addEventListener('keypress', (event) => {
    document.body.style.backgroundColor = getRandomColor();
});

body.addEventListener('keyup', (event) => {
    document.body.style.backgroundColor = "white";
});

body.addEventListener('wheel', (event) => {
    document.body.style.backgroundColor = getRandomColor();
});

Images[1].addEventListener('dblclick', (event) => {
    event.target.style.transform = "scale(1.5)"
});

Images[1].addEventListener('mouseleave', (event) => {
    event.target.style.transform = "scale(1)"
});

Images[2].addEventListener('dblclick', (event) => {
    event.target.style.transform = "scale(1.5)"
});

Images[2].addEventListener('mouseleave', (event) => {
    event.target.style.transform = "scale(1)"
});

Images[3].addEventListener('dblclick', (event) => {
    event.target.style.transform = "scale(1.5)"
});

Images[3].addEventListener('mouseleave', (event) => {
    event.target.style.transform = "scale(1)"
});

Images[1].addEventListener('drag', (event) => {
    Images[0].src = "img/ghost-img.jpg";
    Images[0].style.filter="invert(0%)";
});

Images[1].addEventListener('dragend', (event) => {
    Images[0].src = "img/fun-bus.jpg";
});

// propagation stopping

const backgroundElements = document.querySelectorAll('.destination')
backgroundElements[2].addEventListener('click', (event) => {
   event.target.style.backgroundColor = "red";
});

// this button is in front off the content-pick container and will propagate events back if not stopped
// wihtout a propagation stop the click on the button will bubble back to the .destination evenListener and return red instead of green
const buttons = document.querySelectorAll('.btn')
buttons[2].addEventListener('click', (event) => {
    event.target.style.backgroundColor = "green";
    // with a stopPropagation the button will turn green as the event will not be bubbled upwards in the Node Chain to the destination evenListener.
    event.stopPropagation();
});

//GSAP 
const copyright = document.querySelector('.copyright')

copyright.addEventListener('mouseover', (event) => {
    event.target.style.color = "red"
    TweenMax.to('.copyright', 1, {scaleY: 1.5, height: '10vw', delay: 1, ease: Circ.easeOut}) 
    TweenMax.to('.copyright', 1, {scaleY: 1.5, width: '10vw', delay: 2, ease: Circ.easeOut}) 
    TweenMax.to('.copyright', 1, {scaleY: 1.5, height: '200vw', delay: 3, ease: Circ.easeOut}) 
    TweenMax.to('.copyright', 1, {scaleY: 1.5, width: '-100vw', delay: 4, ease: Circ.easeOut}) 
    TweenMax.to('.copyright', 1, {scaleY: 1.5, height: '100vw', delay: 5, ease: Circ.easeOut}) 
    TweenMax.to('.copyright', 1, {scaleY: 1, height: '20vw', width: '100vw', delay: 6, ease: Circ.easeOut}) 
})