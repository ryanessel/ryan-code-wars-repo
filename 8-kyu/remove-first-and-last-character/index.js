//Remove First And Last Character
const removeChar = (str) =>  str.slice(1, -1);


//OTHER METHODS

/*Remove First and Last Character*/

// function removeChar(str){

//     str = str.split(``); // makes the string an array
//     str.splice(0, 1)// removes elem at the first index,
//     str.splice(str.length-1)//removes elem at the last index
//     str = str.join(``);//makes the array of letters a string again
//     return str;
    
      
    // str = str.split(``);
    // str.shift(), str.pop();
    // str = str.join(``);
    // return str;
      
      
    //or  
    // str = [...str]
    // str.shift();
    // str.pop();
    // str = str.join("");
    // return str;
    
      
    // };