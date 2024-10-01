// Alteratively, try:

// const setColor = (colorClass) => () => { // Ashley said this would fix it, no clue how...
//     document.body.classList.toggle(colorClass)
//     // This makes it an anonymous function, meaning it must be specifically
//     // Called to execute, not execute immedietly
//     // Think of it as a container, will not execute
        // Unless you call it
// }


divElements = document.querySelectorAll('div')

for (divElement of divElements) {
    divElement.addEventListener('click', () => {
        alert('Click!')
        divElement.classList.toggle('show-description')
    })
}

/* STILL WONT WORK! */

/* Here's the original code that General Assembly Dash told me to use for this

 $('div').on('click', function() {
     $(this).toggleClass('show-description');
 });

Outdated  af apparently. Couldn't figure out why it worked on Dash but not my computer until I learned about DOM manipulation
in the actual General Assembly Bootcamp */