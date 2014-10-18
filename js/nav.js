function getWidth() {
  if (self.innerHeight) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector(".site-nav");
        if (distanceY > shrinkOn && getWidth() > 500) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}



function togglePullDown() {
    id = document.querySelector("body");
    if (classie.has(id,"hidden-pulldown")) {
        classie.remove(id,"hidden-pulldown");
    } else {
        classie.add(id,"hidden-pulldown");
    }
}

window.onload = init();
