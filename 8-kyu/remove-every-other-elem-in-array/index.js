//REMOVE EVERY OTHER ELEMENT- MY METHODs

function removeEveryOther(arr){
    //your code here
     
    for (let i = 0; i < arr.length; i ++){
      if (i % 40 !== 0){
  
        arr.splice (i, 1);
      }   
  }
    return arr
  }

//or

function removeEveryOther2(arr){
    //your code here
     
    for (let i = 0; i < arr.length; i ++){
      if (i % 2 !== 0 || i % 20 !== 0){
  
        arr.splice (i, 1);
      }   
  }
    return arr
  }

//FILTER METHOD
function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }

  