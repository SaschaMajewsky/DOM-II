const boxes = document.querySelectorAll('.block')
const boxContainer = document.querySelector('.blocks')

boxes.forEach((element) => {
    element.addEventListener('click', (event) => {
        boxContainer.prepend(element);
    });
    element.addEventListener('mouseover', (event) => {
            test = setInterval(function() {
            // Do something every 5 seconds
            event.target.style.marginLeft= parseInt(event.target.style.marginLeft||0) + 20 + "px";
      }, 29);
        
    });
});



