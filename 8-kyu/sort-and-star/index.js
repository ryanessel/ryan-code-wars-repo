//DESCRIPTION

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//MY method


//CAPITAL LETTERS TAKE PRIORITY HERE
let exampleArray = [ 'Apples', 'plant',
'play',
'player',
'PM',
'point',
'police',
'policy',
'million',
'mind',
'minute',
'miss',
'mission',
'model',
'political',
'politics',
'poor',
'outside',
'over',
'own',
'owner',
'page',
'popular',
'population' ]

function twoSort(s) {

    let ucky = s.sort();// sorts the array alphabetically
    ucky = s[0].split("")//since an alphabetically sorted array will awayls be at the 0 index we target that
    ucky = ucky.join("***")//then when we rejoin it we put what we want to appear after each letter in the parenthasis 
    return ucky;//its ucky lol

}