const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");
const copyIcon = document.getElementById("copyIcon");

function encodeCaesar(str, shift = 3) {
  return str
    .split("")
    .map((char) => {
      let code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      return char;
    })
    .join("");
}

function decodeCaesar(str, shift = 3) {
  return str
    .split("")
    .map((char) => {
      let code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
      }
      return char;
    })
    .join("");
}

encodeBtn.addEventListener("click", function () {
  outputText.value = encodeCaesar(inputText.value);
});

decodeBtn.addEventListener("click", function () {
  outputText.value = decodeCaesar(inputText.value);
});

copyIcon.addEventListener("click", function () {
  outputText.select();
  document.execCommand("copy");
  alert("Text copied to clipboard!");
});
