// const count = () => {
//   return -1;
// };

// module.exports = {
//   count,
// };


const count = (str) => {
  return str.split(' ').filter(function(num) {
   return num != ''
  }).length;
 }


 module.exports = {
  count,
};