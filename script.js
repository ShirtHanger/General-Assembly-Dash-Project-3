divElement = document.querySelectorAll('div')

$('div').on('click', function() {
    $(this).toggleClass('show-description');
    // Perhaps .toggle('show-description') will do the trick. Check on my free time...
    // Nope. Try something like document.body.classList.toggle('green')
});

// Alteratively, try:

// const setColor = (colorClass) => () => { // Ashley said this would fix it, no clue how...
//     document.body.classList.toggle(colorClass)
//     // This makes it an anonymous function, meaning it must be specifically
//     // Called to execute, not execute immedietly
//     // Think of it as a container, will not execute
        // Unless you call it
// }
