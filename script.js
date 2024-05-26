let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Muda a imagem a cada 5 segundos
}

let manualSlideIndex = 1;
showManualSlides(manualSlideIndex);

function plusSlides(n) {
    showManualSlides(manualSlideIndex += n);
}

function showManualSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides-manual");
    if (n > slides.length) {manualSlideIndex = 1}    
    if (n < 1) {manualSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[manualSlideIndex-1].style.display = "block";  
}
