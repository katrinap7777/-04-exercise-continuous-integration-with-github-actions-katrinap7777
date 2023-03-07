// https://linuxhint.com/word-count-using-javascript/

const string = 'PizzaHutt is great';

console.log(string);

console.log('Total Words in String: '+ getCount(string));

const getCount = (str) => {
    return str.split(' ').filter(function(num) {
     return num != ''
    }).length;
   }