// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift == 0 || shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1;
    const str = input.toLowerCase();
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      let ascii = (str.charCodeAt(i) + shift);
      if (ascii < 97) {
        ascii += 26;
      } else if (ascii > 122) {
        ascii -= 26;
      }
      (ascii >= 97 && ascii<= 122) ? newStr += String.fromCharCode(ascii) : newStr += str.charAt(i);
    }
    return newStr;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
