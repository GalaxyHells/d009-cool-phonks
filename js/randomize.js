
// Elementos
const randomizeButton = document.querySelector("button#randomize")

function randomizePhonk () {
    let min = 1
    let max = 4
    let randomPage = Math.floor(Math.random() * (max - min + 1) + min)

    window.location = "..d009-cool-phonks/html/sub-pag0" + randomPage + ".html"
}

function loadVideoData () {

}

randomizeButton.addEventListener("click", e => {
    e.preventDefault();

    randomizePhonk();
})