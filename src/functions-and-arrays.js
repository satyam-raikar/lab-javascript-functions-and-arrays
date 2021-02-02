// Progression #1: Greatest of the two numbers

function greatestOfTwoNumbers(a, b) {

  if (a < b) {
    return b;
  } //comparing both numbers to find gretest
  if (a > b) {
    return a;
  }
  if (a == b) {
    return a;
  } // returning one of the two numbers if equal

}




// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(arr) {


  if (arr.length == 0) { //returning valuue null as the array is empty.
    return null;
  }

  if (arr.length == 1) { //returning the single word avliable in the array as the array is a single-word array.
    return arr[0];
  }

  var longest = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest

}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

netPrice(numbers)
function netPrice(numbers){
if(numbers.length===0){
     return 0;
}else{
var total=numbers.reduce((total,data)=>total+data)
}
return total
}

var type=0;
add(numbers)
function add(numbers){
  if(numbers.length===0){
    return 0;
  }
  var x;
  for(x of numbers){
    if(typeof(x)=="number"){
     type+=x;
    }
    else if(typeof(x)=="boolean"){
      type+=Number(x);
    }
    else{
      type+=x.length
    }
  }
return type;
}
 


// function netPrice(numbers) {

//   if (numbers.length === 0) {
//     return 0;
//   } else {
//     var total = numbers.reduce((total, data) => total + data)
//   }
//   return total
// }

// function add(numbers) {
  
//   if (numbers.length == 0) {
//     return 0;
//   } if(numbers.length === 1) {
//     var total = numbers.reduce((total, data) => total + data);
//   return total;
//   }

//   if(numbers.includes(String)){
//     return numbers.length;
//   }
 
// }








// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
midPointOfLevels(numbersAvg)
function midPointOfLevels(numbersAvg){
  if(numbersAvg.length===0){
    return null;
  }
  else{
    var sum=numbersAvg.reduce((total,data)=>total+data);
    return sum/numbersAvg.length;
  }
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

averageWorldLength(wordsArr);
function averageWordLength(wordsArr){
  value=0;
  if(wordsArr.length===0){
    return null
  }
  else{
     for(x of wordsArr){
       value+=x.length;
     }
  }
return value/wordsArr.length
}



type=0;
avg(wordsArr)
function avg(wordsArr){
  if(wordsArr.length===0){
    return null;
  }
  var x;
  for(x of wordsArr){
    if(typeof(x)=="number"){
     type+=x;
    }
    else if(typeof(x)=="boolean"){
      type+=Number(x);
    }
    else{
      type+=x.length
    }
  }
return type/wordsArr.length
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique){
  if(wordsUnique.length===0){
      return null
  }
  else{
     new_arr=[];
     wordsUnique.forEach(item=>{
       if(new_arr.indexOf(item)<0){
         new_arr.push(item)
       }
     })
  }
return new_arr;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

searchElement(wordsFind,finding)
finding="machine";
function searchElement(wordsFind,finding){
  if(wordsFind.length===0){
    return null;
  }
  return wordsFind.includes(finding);
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount){
  search="machine";
  count=0;
  if(wordsCount.length==0){
    return 0
  }
  else{
    wordsCount.forEach((data)=>{
      if(data===search){
        count++;
      }
    });
   return count;
  }
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

