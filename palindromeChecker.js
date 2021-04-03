function palindrome(str) {
    /* remove special characters and spaces*/
    let removeSpecialCharacters = str.replace(/[^A-Z0-9]/ig, "");
  
    //Make all alpha-numeric characters lowercase 
    let makeLowerCase = removeSpecialCharacters.toLowerCase();
  
    //assign the lowerCase alphaNumeric characters to the variable actualWord
    let actualWord = makeLowerCase;
  
    //reverse the word and assign it to the variable palindromer
    let palindromer = actualWord.split('').reverse().join('');
  
    //use condition to check if string inputed is a palindrome
    if(palindromer === actualWord){
      return true;
    }
    else{
      return false;
    }
  
  }
  
  
  
  let result = palindrome("five|\_/|four");
  
  console.log(result);