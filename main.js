let attempts =0;
let rects = ['first','second','third'];
let bongo = new Image(200,200);
let randomRect;
bongo.src ='img/bongo.png';
document.getElementById("invoke").addEventListener('click',invokeCat);
document.getElementById('first').addEventListener("click", ()=>{
    if (randomRect != 'first'){
        alert('Bongo не тут');
    }
    else{
        alert('Поздравляю ты поймал Bongo');
    }
});
document.getElementById('second').addEventListener("click", ()=>{
    if (randomRect != 'second'){
        alert('Bongo не тут');
    }
    else{
        alert('Поздравляю ты поймал Bongo');
    }
});
document.getElementById('third').addEventListener("click", ()=>{
    if (randomRect != 'third'){
        alert('Bongo не тут');
    }
    else{
        alert('Поздравляю ты поймал Bongo');
    }
});
function invokeCat(){
    attempts++;
    if (attempts ===3) {
        randomRect = rects[Math.floor(Math.random()*rects.length)];
        let rectDOM = document.getElementById(randomRect);
        rectDOM.appendChild(bongo);
        rectDOM.classList.toggle('bongo');
        attempts = 0;
        setTimeout(()=>{
            rectDOM.removeChild(bongo);
            rectDOM.classList.remove('bongo');
            randomRect ='';
        },5000);

    }
}
