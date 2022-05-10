const ResultPassword = document.querySelector('#PasswordShow');
  const PasswordMarkers = document.querySelectorAll('.PasswordMain input[type="checkbox"]');
  const PasswordBtn = document.querySelector("#PasswordBtn");
  const LengthChoosed = document.querySelector("#Length");
  
  const Caps = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
  const Mins = 'abcdefghijklmnopqrstuvxwyz';
  const numbers = '123456789';
  const symbols = '!#$%&_-';
  let word='';

  let PasswordsMethods = [
     ()=> CapLetter(),
     ()=> MinLetter(),
     ()=> Number(),
     ()=> Symbols()
  ]

  let PasswordsMethodsActivate = [];
    
  PasswordBtn.addEventListener('click', ()=>{
    if(PasswordMarkers[0].checked || PasswordMarkers[1].checked || PasswordMarkers[2].checked || PasswordMarkers[3].checked){

    /* O ID do ForEach abaixo deve estar em sincronia com as funções do Array PasswordsMethods!*/
    PasswordMarkers.forEach((marked,id) => {
      if(marked.checked)
        PasswordsMethodsActivate.push(PasswordsMethods[id]);
    })
    Gerar(PasswordsMethodsActivate);   
  } 
    })

    function Gerar(strings){
      for(var i = 0; i<LengthChoosed.value ; i++){
        const random = Math.floor(Math.random() * ((strings.length-1) - 0 +1)+0);
        word += PasswordsMethodsActivate[random]();
      }
      ResultPassword.innerHTML = word;
      word='';
      PasswordsMethodsActivate=[];
    }

    function CapLetter(){
      const random = Math.floor(Math.random() * ((Caps.length-1) - 0 + 1) + 0);
      if(typeof Caps != Array)
      Caps.split('');
      return Caps[random];
    }

    function MinLetter(){
      const random = Math.floor(Math.random() * ((Mins.length-1) - 0 + 1) + 0);
      if(typeof Mins != Array)
      Mins.split('');
      return Mins[random];
    }

    function Number(){
      const random = Math.floor(Math.random() * ((numbers.length-1) - 0 + 1) + 0);
      if(typeof numbers != Array)
      numbers.split('');
      return numbers[random];
    }

    function Symbols(){
      const random = Math.floor(Math.random() * ((symbols.length-1) - 0 + 1) + 0);
      if(typeof symbols != Array)
      symbols.split('');
      return symbols[random];
    }