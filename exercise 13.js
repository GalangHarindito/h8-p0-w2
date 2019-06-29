function xo(str) {
    var countO = 0
    var countX = 0
for(i=0;i<str.length;i++){
    if(str[i]==='o'){
        countO ++    
    }else if(str[i]==='x'){
        countX ++
    }
}
 if(countX === countO){
     return true
 }else{return false}
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true