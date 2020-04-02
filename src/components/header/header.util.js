export const headerAnimation = () => {
  const words = document.querySelectorAll(".word");
  let wordArr = [];
  let currentWordIndex = 0;

  words[currentWordIndex].style.opacity = 1;

  // Splite each words and add it to wordArr
  for (let i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }

  changeWord();
  setInterval(changeWord, 3000);

  //! Functions for animation
  function changeWord() {
    const currentWord = wordArr[currentWordIndex];
    const nextWord =
      currentWordIndex === words.length - 1
        ? wordArr[0]
        : wordArr[currentWordIndex + 1];

    // Take out current letters
    for (let i = 0; i < currentWord.length; i++) {
      animateLetterOut(currentWord, i);
    }

    // Take in next letters
    for (let i = 0; i < nextWord.length; i++) {
      nextWord[i].className = "letter behind";
      nextWord[0].parentElement.style.opacity = 1;
      animateLetterIn(nextWord, i);
    }

    // Move to next word
    currentWordIndex =
      currentWordIndex === wordArr.length - 1 ? 0 : currentWordIndex + 1;
  }

  function animateLetterOut(currentWord, i) {
    setTimeout(function() {
      currentWord[i].className = "letter out";
    }, i * 80);
  }

  function animateLetterIn(nextWord, i) {
    setTimeout(function() {
      nextWord[i].className = "letter in";
    }, 340 + i * 80);
  }

  function splitLetters(word) {
    const content = word.textContent;

    word.innerText = "";
    let letters = [];

    for (let i = 0; i < content.length; i++) {
      const letter = document.createElement("span");

      letter.classList.add("letter");
      letter.innerText = content.charAt(i);

      word.appendChild(letter);
      letters.push(letter);
    }

    wordArr.push(letters);
  }
};
