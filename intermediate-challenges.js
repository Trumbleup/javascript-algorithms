// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
  let sum = 0;

  if (arr[0] <= arr[1] ) {
   for (let i = arr[0] ; i <= arr[1] ; i++) {
     sum = sum + i;
  }
  }
  
  else if (arr[1] < arr[0] ){
    for (let i = arr[1] ; i <= arr[0] ; i++) {
     sum = sum + i;
    }
  }
  return sum;
}

sumAll([1, 4]);

// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for (let i = 0 ; i < arr1.length ; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i])
    }
  }
  for (let i = 0 ; i < arr2.length ; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i])
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
  // Remove all the values
  let newArr = arguments;
  let duplicates = [];
  let answer = []
  for (let property in newArr) {
    newArr[0].map((val, i) => {
      if (val === newArr[property]){
        duplicates.push(newArr[property]);
      }
    })
  };
  newArr[0].map((val, i) => {
    if (duplicates.indexOf(val) === -1) {
      answer.push(val)  
    }
  })

  return answer;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Intermediate Algorithm Scripting: Pig Latin
// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {
  const vowelRegularExp = /[aeiou]/;
  let newStr = str.split("");
  if (vowelRegularExp.test(newStr) === true) {
    if (vowelRegularExp.test(newStr[0]) === false) {
      while (vowelRegularExp.test(newStr[0]) === false){
        newStr.push(newStr[0]);
        newStr.shift();
      }
      return newStr.join("") + "ay"
    } else {
    return newStr.join("") + "way"
    }
  } else {
    return newStr.join("") + "ay";
  }
  
}

translatePigLatin("glove");



// Intermediate Algorithm Scripting: Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  let newStrArr = str.split(" ");
  const capitalRegEx = /[A-Z]/;
  let newAfter = after;
  if (capitalRegEx.test(String(before.charAt(0))) === true) {
    newAfter = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
  }
  for (let i = 0 ; i < newStrArr.length ; i++) {
    if (newStrArr[i] === before) {
      newStrArr.splice(i, 1, newAfter);
    }
  }

  return newStrArr.join(" ");
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

// Intermediate Algorithm Scripting: DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  const strArr = str.split("");
  let newArr = [];

  for (let i = 0 ; i < strArr.length ; i++) {
   let subArr = [];
   switch (strArr[i]) {
      case "A":
        subArr.push(strArr[i]);
        subArr.push("T");
        break;
      case "T":
        subArr.push(strArr[i]);
        subArr.push("A");
        break;
      case "C":
        subArr.push(strArr[i]);
        subArr.push("G");
        break;
      case "G":
        subArr.push(strArr[i]);
        subArr.push("C");
        break;
    }
    newArr.push(subArr)
  }
  return newArr;
}

pairElement("GCG");

// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const strArr = str.split("");
  for (let i = 0 ; i < strArr.length ; i++) {
    if (String.fromCharCode(strArr[strArr.length-1].charCodeAt(0)) === "z") {
        return undefined
    };
    if (strArr[i].charCodeAt(0) + 1 !== strArr[i+1].charCodeAt(0)){
        return String.fromCharCode(strArr[i].charCodeAt(0) + 1)
    };   
  };
};

fearNotLetter("abce");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");