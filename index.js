const div = document.getElementById('box')
const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')


red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);

function mudarCores() {

    redValue = red.value;
    greenValue = green.value;
    blueValue = blue.value;

    box.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}


