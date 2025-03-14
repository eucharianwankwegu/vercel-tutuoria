const navWrap = document.querySelector(".nav-wrap");
const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", function(){
    navWrap.classList.toggle("show-links");
});


let slideIndex = 0;
let slides = document.getElementsByClassName("my-slides");
let i;
function showslides(){
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showslides, 2000);
}
showslides();
