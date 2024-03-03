import { useState, useMemo, ChangeEvent } from "react";
import "./App.css";

function Palindrome(): JSX.Element {
  const [word, setWord] = useState<string>("");
  const isPalindrome: boolean = useMemo(() => {
    return word === word.split("").reverse().join("");
  }, [word]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setWord(e.target.value);
  };

  return (
    <div className="screen">
      <div className="container">
        <div className="box2">
          <form>
            <div>
              <h2> Type in Word </h2>
              <input
                className="input"
                value={word}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <div className="result4">Is this word a palindrome? </div>
          {word && (
            <>
              <div className="result2">{isPalindrome ? "Yes" : "No"}</div>
            </>
          )}
        </div>
      </div>
      <div className="imagebox">
        <img className="img1" src="img1.png" />
      </div>
    </div>
  );
}

export default Palindrome;
