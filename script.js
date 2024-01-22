
const randomNumber = Math.round(Math.random() * 10);
let tentativas = 1;

const start = (event) =>{
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');


  if( Number(inputNumber.value) == randomNumber){
      document.querySelector(".screen1").classList.toggle("hide")
      document.querySelector(".screen2").classList.toggle("hide")
      document.querySelector(".screen2 h2").innerText = `Acertou em ${tentativas} tentativas`
  }else{
      document.querySelector(".screen1 h3").classList.remove("hide")
      inputNumber.value = '';
  }

  tentativas++;
}

const restart =  () =>{

  location.reload();
  
}


//eventos

let btnTry = document.querySelector('#btnTry');
let btnReload = document.querySelector('#btnReload');

btnTry.addEventListener('click', start);
btnReload.addEventListener('click', restart);