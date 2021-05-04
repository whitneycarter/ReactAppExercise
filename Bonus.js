// BONUS
// 6a
import { useState } from 'react'

// 6b
const Bonus = () => {
  // 6d
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // 6f
  const [letter, setLetter] = useState(0);

  // 6e
  return (
    <div>
      <h1>{letters[letter]}</h1>
      <button onClick={() => letter < (letters.length - 1) ? setLetter(letter + 1) : setLetter(0)}>NEXT LETTER</button>
    </div>
  );
}

// 6c
export default Bonus;