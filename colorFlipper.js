submitbtn.addEventListener('click', ()=> {
    let redval = redinp.value;
    let greenval = greeninp.value;
    let blueval = blueinp.value;
    if (redval==""){redval="255"};
    if (greenval==""){greenval="255"};
    if (blueval==""){blueval="255"};
    let str = `rgb(${parseInt(redval)}, ${parseInt(greenval)}, ${parseInt(blueval)})`;
    container.style.backgroundColor = str;
    colorname.innerText = str;
    colorname.style.color = `rgb(${parseInt(redval)+80}, ${parseInt(greenval)+80}, ${parseInt(blueval)+80})`;
    
})

function bgchange() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let str = `rgb(${red}, ${green}, ${blue})`;
    container.style.backgroundColor = str;
    colorname.innerText = str;
    colorname.style.color = `rgb(${red+80}, ${green+80}, ${blue+80})`;
}
btn.addEventListener('click', bgchange)