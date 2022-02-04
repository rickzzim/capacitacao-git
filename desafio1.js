function adiçao() {
    console.log(arguments);
  var args = [].slice.call(arguments, 0); 

  var soma = 0;
  
 
  for (var i = 0; i < args.length; i++) {
          soma += args[i];
  }
  
  return soma /= i
  
  
}

    

console.log(adiçao(8, 9))