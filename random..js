const colorBOX = document.getElementById('colorBOX')
const click = document.getElementById('click')
const color = document.getElementById('color')

let randomNumber;

click.onclick = function(){
    randomNumber = Math.floor(Math.random() * 6) + 1;

    if(randomNumber == 1){
        colorBOX.style.backgroundColor = 'yellow';
        color.textContent = 'yellow'
    }

    if(randomNumber == 2){
        colorBOX.style.backgroundColor = 'white';
        color.textContent = 'white'
    }

    if(randomNumber == 3){
        colorBOX.style.backgroundColor = 'pink';
        color.textContent = 'pink'
    }

    if(randomNumber == 4){
        colorBOX.style.backgroundColor = 'blue';
        color.textContent = 'blue'
    }

    if(randomNumber == 5){
        colorBOX.style.backgroundColor = 'red';
        color.textContent = 'red'
    }

    if(randomNumber == 6){
        colorBOX.style.backgroundColor = 'green';
        color.textContent = 'green'
    }

}



