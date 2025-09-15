// Import SCSS for styling
import './index.scss'

// AnimatedLetters component to animate each letter individually
// Props:
// - letterClass: the CSS class controlling animation style
// - strArray: array of characters to display
// - idx: starting index for staggered animation delays
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        // Wrap each character in a span with a unique key and animation class
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

// Export the component as default
export default AnimatedLetters
