let body = document.querySelector("body")
let dotDiv = document.createElement("div")

document.addEventListener('click', function addFunction(event) {
    let top = event.clientY;
    let left = event.clientX;
    body.appendChild(dotDiv);
    dotDiv.classList.add('spot');
    dotDiv.style.top = (top) + 'px'
    dotDiv.style.left = (left) + 'px'
})