//FUNCTION THAT TAKES A STRING OF numbers and makes either 0 or 1: if the index of the 
//string # is less than 5 it changes it to 0,
// and if equal to or graeater than 5 it changes it to a 1


let strOfNums = "54732890574328";

function fakeBin(x){
    let fakeBinString = []
   for (let i =0; i < x.length; i ++){
     if (x[i] < 5 ){
       fakeBinString.push(0);
     }else if (x[i] >= 5) {
       fakeBinString.push(1);
     }
  
   }
  
    return fakeBinString.join(``);
  }