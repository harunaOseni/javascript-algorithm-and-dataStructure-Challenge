function telephoneCheck(str) {
    let unitedStateTelephoneFormat =  /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/; 
    //Note: ["search for any character among given"] regex
  
    if((unitedStateTelephoneFormat.test(str)) === true){
      return true;
    }
    return false;
  }
  
  telephoneCheck("555-555-5555");