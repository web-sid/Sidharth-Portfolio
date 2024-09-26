import { useEffect, useState } from "react";

const HeroTypeWritter = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetter, setCurrentLetter] = useState("");
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let charIndex = 0;

    const typing = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setCurrentLetter(currentWord.slice(0, charIndex - 1));
        charIndex++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000);
      }
    }, speed);

    return () => {
      clearInterval(typing);
    };
  }, [currentWord, speed, words]);

  return (
    <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 mt-7">
      {currentLetter}
    </span>
  );
};

export default HeroTypeWritter;
