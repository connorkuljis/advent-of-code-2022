// function toCamelCase(str: string) {
//   let s = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 != 0) {
//       s += str.charAt(i).toUpperCase();
//     } else {
//       s += str[i];
//     }
//   }
//   return s;
// }

//const toCamelCase = (str: String) => {

function toCamelCase(str: string) {
  if (str.length == 0) {
    return str;
  }

  let s = Array.from(str);
  for (let i = 0; i < str.length; i++) {
    if (i % 2 != 0) {
      s[i] = s[i].toUpperCase();
    }
  }
  return s.join("");
}

console.log(toCamelCase("hello"));
