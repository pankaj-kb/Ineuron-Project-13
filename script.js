document.addEventListener('click', function (event) {

    let body = document.querySelector("body")
    let dotDiv = document.createElement("div")
    let name = document.querySelector("h1");

    body.appendChild(dotDiv);

    let top = event.clientY;
    let left = event.clientX;

    let shapeNum = Math.floor(Math.random() * 3) + 1;
    console.log(shapeNum);

    if (shapeNum === 1) {
        dotDiv.classList.add('spot');
        dotDiv.style.backgroundColor = "blue"
        name.innerText = "Circle"
    } else if (shapeNum === 2) {
        dotDiv.classList.add('triangle');
        dotDiv.style.color = "red"
        name.innerText = "Triangle"
    } else if (shapeNum === 3) {
        dotDiv.classList.add('square');
        name.innerText = "Square"
        dotDiv.style.backgroundColor = "yellow"
    }

    dotDiv.style.top = (top) + 'px'
    dotDiv.style.left = (left) + 'px'
})