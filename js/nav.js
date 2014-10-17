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
    ids = document.querySelectorAll(".site-nav #navigation a");
    for (i = 0; i < ids.length; ++i) {
        if (classie.has(ids[i],"display-none")) {
            classie.remove(ids[i],"display-none");
        } else {
            classie.add(ids[i],"display-none");
        }
    }
}

window.onload = init();

document.getElementById('pull').onclick = function() {
    togglePullDown();
    
    if (classie.has(document.querySelector("#pull"),"display-none")) {
            classie.remove(ids[i],"display-none");
    }
}
