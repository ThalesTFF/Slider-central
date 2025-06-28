//Clonar os elementos do slide
for(let i = 0; i < 2; i++){  
    const track = document.querySelector('.slider-track');
    track.innerHTML += track.innerHTML;
}

let slides = document.querySelectorAll('.slide');
slides.forEach((slide) =>{
    slide.addEventListener('click', moverSlides)
})




function moverSlides(e){
    let slideClicked = e.target;

    const rect = slideClicked.getBoundingClientRect();
    const slideCenter = rect.left + (rect.width / 2);

    window.scrollTo(slideCenter);
}

function detectarSlideCentral(){
    const centroX = window.innerWidth / 2;

    slides.forEach((slide) =>{
        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.left + (rect.width / 2);

        if(Math.abs(slideCenter - centroX) < 50 ){
            slide.classList.add('slide-central');
            console.log("Slide central detectado");
        }else{
            slide.classList.remove('slide-central');
        }
    })
    requestAnimationFrame(detectarSlideCentral);
}

requestAnimationFrame(detectarSlideCentral);
