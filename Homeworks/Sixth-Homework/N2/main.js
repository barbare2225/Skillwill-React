let btn = document.getElementById('open-button');

function func(){
    const colorInput = document.getElementById('colorInput').value.toLowerCase();
    const validColors = ['red','blue','green','black','white'];
    if(validColors.includes(colorInput)){
        document.body.style.backgroundColor = colorInput;
    }else{
        alert('invalid color!');
    }
}

btn.addEventListener('click',func);
