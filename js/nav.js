function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector(".site-nav");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}

function togglePullDown() {
    id = document.querySelector(".site-nav #navigation a");
    if (classie.has(id,"display-none")) {
        classie.remove(id,"display-none");
    } else {
        classie.add(id,"display-none");
    }
}

window.onload = init();

document.getElementById('pull').onclick = function() {
    togglePullDown();
}
