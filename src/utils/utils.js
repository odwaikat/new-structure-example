export const loadLocalImage = (url) => {
    let image;
    try {
        image = require(`static/assets${url}`);
    } catch (error) {
        console.error(error);
        image = require(`static/assets/notfound.png`);
    }
    return image;
}

let animating = false;
export const scrollTo = (element, to, duration, direction) => {
    if (animating || !element || to === undefined || !duration) {
        return false;
    }
    var _requestAnimationFrame = function(win, t) {
        return win["webkitR" + t] || win["r" + t] || win["mozR" + t] || win["msR" + t] || function (fn) {
            setTimeout(fn, 60);
        };
    }(window, "requestAnimationFrame")

    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    } //Or get your own: http://gizma.com/easing/

    const end = +new Date() + duration;
    let from = (element === 'window') ? window.pageXOffset : element.scrollLeft;
    animating = true;

    if (direction === 'vertical') {
        from = (element === 'window') ? window.pageYOffset : element.scrollTop;
    }

    var step = function() {
        var current = +new Date(),
            remaining = end - current;

        if (remaining < 0) {
            animating = false;
        } else {
            var ease = easeInOutCubic(1 - remaining / duration);

            if (!direction || direction === "horizontal") {
                (element === 'window') ? window.scrollTo(from + (ease * (to-from)), window.pageYOffset) : element.scrollLeft = from + (ease * (to-from));
            } else if (direction === "vertical") {
                (element === 'window') ? window.scrollTo(window.pageXOffset, from + (ease * (to-from))) : element.scrollTop = from + (ease * (to-from));
            }
        }

        _requestAnimationFrame(step);
    };
    step();
};
