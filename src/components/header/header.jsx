import React, { Component, useEffect } from "react";
import "./header.css";

import $ from "jquery";

const Header = () => {
  useEffect(() => {
    const words = $(".word");
    let wordArr = [];
    let currentWordIndex = 0;

    $(words[currentWordIndex]).css("opacity", 1);

    // Splite each words and add it to wordArr
    for (let i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    changeWord();
    setInterval(changeWord, 3000);

    // Functions for animation

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
        $(nextWord[i]).attr("class", "letter behind");
        $(nextWord[0])
          .parent()
          .css("opacity", 1);
        animateLetterIn(nextWord, i);
      }

      // Move to next word
      currentWordIndex =
        currentWordIndex === wordArr.length - 1 ? 0 : currentWordIndex + 1;
    }

    function animateLetterOut(currentWord, i) {
      setTimeout(function() {
        $(currentWord[i]).attr("class", "letter out");
      }, i * 80);
    }

    function animateLetterIn(nextWord, i) {
      setTimeout(function() {
        $(nextWord[i]).attr("class", "letter in");
      }, 340 + i * 80);
    }

    function splitLetters(word) {
      const content = $(word).text();

      $(word).text("");
      let letters = [];

      for (let i = 0; i < content.length; i++) {
        const $letter = $("<span>");
        $letter.addClass("letter").text(content.charAt(i));
        $(word).append($letter);
        letters.push($letter.get()[0]);
      }

      wordArr.push(letters);
    }
  }, []);

  return (
    <header className="header__container">
      <div className="header__intro header__intro--greet valign-wrapper">
        <div className="text">
          <p>Hi! I'm Emily,&nbsp;</p>
          <p className="word-group">
            <span className="word first">passionate</span>
            <span className="word second">diligent</span>
            <span className="word third">trustworthy</span>
            <span className="word fourth">honest</span>
          </p>
        </div>

        <a className="downArrow bounce" href="#anchor-about">
          <p>Click or Scroll</p>
          <i className="material-icons large">keyboard_arrow_down</i>
        </a>
      </div>
    </header>
  );
};
// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="header__container">
//         <div className="header__intro header__intro--greet valign-wrapper">
//           <div className="text">
//             <p>Hi! I'm Emily, </p>
//             <p className="word-group">
//               <span className="word first">passionate</span>
//               <span className="word second">diligent</span>
//               <span className="word third">trustworthy</span>
//               <span className="word fourth">honest</span>
//             </p>
//           </div>

//           <a className="downArrow bounce" href="#anchor-about">
//             <p>Click or Scroll</p>
//             <i className="material-icons large">keyboard_arrow_down</i>
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

export default Header;
