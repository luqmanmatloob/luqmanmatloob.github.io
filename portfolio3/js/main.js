
// preloader

// Wait for the page to fully load
window.addEventListener('load', function() {
    // Get the preloader element
    var preloader = document.querySelector('#preloader');

    // Hide the preloader after 2 seconds
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 500); // 2000 milliseconds = 2 seconds
});
