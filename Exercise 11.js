function balikKata(kata){
    var kataRev ="";
    for(var i= 0; i<kata.length; i++){
        kataRev = kata[i]+kataRev;
    }
    return kataRev;
  }

  
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS  