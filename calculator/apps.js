const Input = document.querySelectorAll('#input-side h1');
const DoerInput = document.querySelector('#input-side h2')
function CheckInput(n1, n2 , d){
  if ( AnswerText.innerHTML != ""){
    ClearT()
    if (d == "+"){
      Input[0].innerHTML = parseInt(n1) + parseInt(n2) ;
    }
    else if (d == "×"){
      Input[0].innerHTML = parseInt(n1) * parseInt(n2) ;
    }
    else if (d == "-"){
      Input[0].innerHTML = parseInt(n1) - parseInt(n2) ;
    }
    else if (d == "÷"){
      Input[0].innerHTML = parseInt(n1) / parseInt(n2) ;
    }
  }
}

const Doer = document.querySelectorAll('#doer-button button');
for (let i = 0; i < Doer.length; i++) {
  Doer[i].addEventListener('click', ()=>{
    DoerInput.innerHTML += Doer[i].innerHTML;
    CheckInput();
  })
}

const NumberButtons = document.querySelectorAll('#number-side button');
for (let b = 0 ; b < NumberButtons.length ; b++) {
  NumberButtons[b].addEventListener('click' , ()=>{
    if (DoerInput.innerHTML != ""){
      Input[0].innerHTML += NumberButtons[b].innerHTML;
    }
    else{
      Input[1].innerHTML += NumberButtons[b].innerHTML;
    }
  })
}

const Answer = document.querySelector('#doer-button div');
const AnswerText = document.querySelector('#input-side h3');
Answer.addEventListener('click', () => {
  AnswerText.innerHTML = Answer.innerHTML;
  CheckInput(Input[0].innerHTML , Input[1].innerHTML , DoerInput.innerHTML)
})

const Clear = document.querySelector('#clear-input')
function ClearT() {
  for (i = 0 ; i < Input.length ; i++){
    Input[i].innerHTML = "";
    DoerInput.innerHTML = "";
    AnswerText.innerHTML = "";
  }
}
Clear.addEventListener('click', ClearT)