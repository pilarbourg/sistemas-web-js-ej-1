let dictionary = [];

fetch("dictionary.txt")
  .then((response) => response.text())
  .then((text) => {
    dictionary = text.split("\n").filter((word) => word.trim() !== "");
    console.log("Dictionary loaded", dictionary.length, "words");
  })
  .catch((err) => console.error("Failed to load dictionary", err));

function generatePassword(numWords, minLength = 15, maxLength = 64) {
  if (!dictionary.length) return "Dictionary not loaded";

  let password = "";

  while (true) {
    let chosenWords = [];
    let availableWords = [...dictionary];

    for (let i = 0; i < numWords; i++) {
      const index = Math.floor(Math.random() * availableWords.length);
      let word = availableWords[index];
      word = word.charAt(0).toUpperCase() + word.slice(1);
      chosenWords.push(word);
    }

    password = chosenWords.join("");

    if(password.length >= minLength && password.length <= maxLength) {
      break;
    }
  }

  return password;
}
