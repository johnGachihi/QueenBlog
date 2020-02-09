import './../../../lib/sly'

console.log(Sly);

// TODO Where to call this method. Here or in app.js

const slider = new Sly('#categories-slide', {
    horizontal: true,
    itemNav: 'forceCentered',
    smart: 'true',
    activateOn: 'click',
    scrollBy: 40,

    mouseDragging: true,
    touchDragging: true,
    releaseSwing: true,

    forward: '#forward-scroll',
    backward: '#backward-scroll',
    moveBy: 500,

    elasticBounds: true
}).init();


$(window).on('resize', () => {
    slider.reload();
})

$('#backward-scroll').on('click', ev => {
    ev.preventDefault();
    console.log((slider.pos))
})

$('#forward-scroll').on('click', ev => {
    ev.preventDefault();
    console.log((slider.pos))
})
