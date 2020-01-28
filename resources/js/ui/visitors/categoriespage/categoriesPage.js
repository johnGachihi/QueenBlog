import './../../../lib/sly'

console.log(Sly);

// TODO Where to call this method. Here or in app.js
setupHorizontalSlider();

function setupHorizontalSlider() {
    const slider = new Sly('#categories-slide', {
        horizontal: true,
        itemNav: 'basic',
        smart: 'true',
        activateOn: 'click',
        scrollBy: 40,

        mouseDragging: true,
        touchDragging: true,
        releaseSwing: true,

        forward: '#forward-scroll',
        backward: '#backward-scroll',
        moveBy: 500
    }).init();
}
