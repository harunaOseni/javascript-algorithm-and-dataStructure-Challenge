function rot13(str) {
    let decoded = ""; 
  
    for(let i = 0; i < str.length; i++){
      let stringsAscii = str[i].charCodeAt();
  
      if(stringsAscii >= 65 && stringsAscii <= 77){
        decoded += String.fromCharCode(stringsAscii + 13);
      } else if(stringsAscii >= 77 && stringsAscii <= 90){
        decoded += String.fromCharCode(stringsAscii - 13);
      } else {
        decoded += String.fromCharCode(stringsAscii);
      }
    }
  
    return decoded;
  }
  
  rot13("SERR PBQR PNZC");