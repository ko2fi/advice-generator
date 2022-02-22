const adviceNumber = document.querySelector("h2 span");
const advices = document.querySelector(".advice");
const dice = document.querySelector('.dice');
function advice(){
    dice.addEventListener('click', ()=>{
        window.location.reload();
    })
    fetch('https://api.adviceslip.com/advice')
    .then((res)=>res.json())
    .then((data)=>{
        adviceNumber.innerHTML += data.slip.id;
        advices.innerHTML = `"${data.slip.advice}"`;
    })
}

advice();