document.addEventListener('impress:stepenter', function (e) {
    if (typeof slideInterval !== 'undefined') {
        clearInterval(slideInterval);
        clearInterval(counterInterval);
    }
    var duration = (e.target.getAttribute('data-transition-duration') ? e.target.getAttribute('data-transition-duration') : undefined); // use the set duration or fallback to 2000ms
    if (duration) {
        duration = parseInt(duration) * 60
        slideInterval = setInterval(presentation.next, duration * 1000);
        var display = document.querySelector('#time');
        counterInterval =  startTimer(duration, display);
    }

});


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    return setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
