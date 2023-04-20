let offset = 0;
const sliderLine = document.querySelector(".slider__line");
const captions = ["Super cool star", "Super cool pokemon", "Super cool cherry"];

document.querySelector(".btn2").addEventListener("click", function() {
    offset += 600;
    if (offset > 1200) {
        offset = 0;
    }
    sliderLine.style.right = offset + "px";
    updateCaption();
})

document.querySelector(".btn1").addEventListener("click", function() {
    offset -= 600;
    if (offset < 0) {
        offset = 1200;
    }
    sliderLine.style.right = offset + "px";
    updateCaption();
})

function updateCaption() {
    const index = Math.abs(offset / 600);
    const caption = captions[index];
    document.querySelector(".slider__title").textContent = caption;
}