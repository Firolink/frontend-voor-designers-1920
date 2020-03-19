console.log('doet ie et nog?');

const track = document.querySelector('.slideTrack');
const slide = Array.from(track.children);
const nextButton = document.querySelector('.slideButton--right');
const backButton = document.querySelector('.slideButton--left');
const dotsNav = document.querySelector('.slideshownav');
const dots = Array.from(dotsNav.children);

const slideWidth = slide[0].getBoundingClientRect().width;
//const slideWidth = slideSize.width; <--- dat hierboven doet hetzelfde maar korter//




//slides sorteren//
//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth + 'px';
//slides[2].style.left = slideWidth * 1 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slide.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left; + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


//left button click
backButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
})



//right button click
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);


})






