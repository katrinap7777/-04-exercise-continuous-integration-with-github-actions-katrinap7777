// const count = () => {
//   return -1;
// };

// module.exports = {
//   count,
// };
const numRegex = /^\d*$/;
// const numberRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;

const count = (str) => {
  if ((!str) || (str === numRegex)) {
    return false
  } else {
  return str.split(' ').filter(function(num) {
   return num != '' 
  }).length;}
 }


// const count = (str) => {

//   return str.split(' ').filter(function(num) {
//    return num != '' 
//   }).length;
//  }



// https://www.educative.io/answers/how-to-create-a-basic-word-counter-machine-in-javascript
// function renderText(domElt, text) {
//   domElt.innerText = text;
// }

// function handleWord(text) {
//   const textArr = text.split(" ");
//   let wordCount = 0;

//   for(word of textArr) {
//       if(/[a-zA-Z0-9]/.test(word)) {
//           wordCount += 1;
//       }
//   }

//   return wordCount;      

// }

// function handleChar(text) {
//  return text.length;     
// }

// function init() {
//   const textArea = document.querySelector('textarea')
//   const charDOM = document.querySelector('#charNum')
//   const wordDOM = document.querySelector('#wordNum')

  
//   textArea.addEventListener("input", event => {
//       const text = event.target.value.trim();
      
//       // get word count and char count and render them
//       renderText(wordDOM, handleWord(text));
//       renderText(charDOM, handleChar(text));       

//   });
// }

// init();

 module.exports = {
  count,
};