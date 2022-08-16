// RETURNING BINARY VAL of NUM AS INTEGER

//Delclaration Function version
function toBinary1(num) {
    return +(num >>> 0).toString(2);// adding the "+" at the begining makes the out put a number you can also do Number(everthing you want to be a number in here)
  }


//Arrow function version
  const toBinary2 = num => +(num >>> 0).toString(2);

// ES6 non declared function?
let toBinary3;

toBinary3 = num => +(num >>> 0).toString(2);