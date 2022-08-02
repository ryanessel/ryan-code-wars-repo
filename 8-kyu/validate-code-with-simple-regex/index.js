//CODE USED TO VALIDATE FIRST NUMBER OF A CODE WHERE THE CODE IS ASSUMED
//ALWAYS START WITH A NUMBER; you have to code.toString() because you can't slice an integer
function validateCode (code) {
    let firstNumb = code.toString().slice(0, 1);
    if (firstNumb === "1" || firstNumb === "2" || firstNumb === "3") {
      return true;
    } else {
      return false;
    }
    
    }
//one line .test() METHOD version by smile67 of code wars https://www.codewars.com/users/smile67

function validateCode (code) {return /^[123]/.test(code)}