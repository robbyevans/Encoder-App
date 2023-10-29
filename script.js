const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");
const copyIcon = document.getElementById("copyIcon");

encodeBtn.addEventListener("click", function () {
  let encoded = btoa(inputText.value);
  outputText.value = encoded;
});

decodeBtn.addEventListener("click", function () {
  try {
    let decoded = atob(inputText.value);
    outputText.value = decoded;
  } catch (e) {
    outputText.value = "Invalid encoded text!";
  }
});

copyIcon.addEventListener("click", function () {
  outputText.select();
  document.execCommand("copy");
  alert("Text copied to clipboard!");
});
