divElement = document.querySelectorAll('div')

$('div').on('click', function() {
    $(this).toggleClass('show-description');
    // Perhaps .toggle('show-description') will do the trick. Check on my free time...
    // Nope. Try something like document.body.classList.toggle('green')
});
