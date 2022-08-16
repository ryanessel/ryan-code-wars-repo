//SEVERAL WAYS TO REMOVE DUPLICATE ELEMS FROM ARRAYS
function distinct1(a) {
  
    return a.filter((item,
        index) => a.indexOf(item) === index);
}

//"one line" arrow version
const distinct2 = (a) => a.filter((item, index) => a.indexOf(item) === index);

//*had ultra short spread  operator set method arrow func 
const distinct = a => [...new Set(a)];