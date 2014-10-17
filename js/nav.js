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
    id = document.querySelector(".site-nav");
    if (classie.has(id,".hidden-pulldown")) {
        classie.remove(id,"hidden-pulldown");
    } else {
        classie.add(id,"hidden-pulldown");
    }
}

window.onload = init();

document.getElementById('pull').onclick = function() {
    togglePullDown();
}
