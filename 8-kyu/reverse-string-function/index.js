//REVERSE A STRING!!!
function reverseString(str) {
    str = [...str].reverse();
    str = str.join(``);
    return str;
  }


  /*
  LONGER WAY TO DO IT

function reverseString(str) {
  str = str.split(``);
  str.reverse();
  str = str.join(``);
  return str;
}

  */