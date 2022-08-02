
//Reg fucntion version; function is hoisted.
function isLockNessMonster(s) {
    //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
    if (s.includes("tree fiddy") || s.includes("three fifty") || s.includes("3.50") ) {
      
      return "this is the lockness monsterino!"
    }
    
  }
  
  // Arrow function version. 
  let isLockNessMonster = s =>  {
    
    if (s.includes("tree fiddy") || s.includes("three fifty") || s.includes("3.50") ) {
      
      return "this is the lockness monsterino!"
    
    }
  }

  //clever solution by code wars user rorysedgwick https://www.codewars.com/users/rorysedgwick
  const isLockNessMonster = (s) => /tree fiddy|three fifty|3.50/.test(s);