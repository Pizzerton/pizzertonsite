import React, { useState, useEffect, useRef, useCallback } from 'react';

// Constants for positioning and styling
const TEXT_OFFSET_X = 20;
const TEXT_OFFSET_Y = 15;
const FACE_OFFSET_X = 496;
const FACE_OFFSET_Y = 16;
const FONT_SIZE = 22;
const BOX_WIDTH = 608;
const BOX_HEIGHT = 128;
const FONT_FAMILY = 'NikoFont'; // Make sure 'NikoFont' is defined via @font-face
const MIN_FONT_SIZE = 10; // Define a minimum font size
const ARROW_ANIMATION_INTERVAL = 400; // Milliseconds for arrow up/down cycle
const ARROW_OFFSET_Y = 5; // Pixels to move arrow up/down
const FACE_SYNTAX_REGEX = /\[face:([^\]]+)\]/; // Regex to find [face:/path/to/img.png]

// --- IMPORTANT ---
// 1. Make sure the font is loaded via @font-face in your global CSS.
// 2. Verify image paths point correctly to files within the `public` directory.
// 3. Ensure 'textboxArrow.png' exists in `public/nikogen/`.
// --- --- --- ---

const NikoGen = ({
  messages = [{ text: "Default message", imageSrc: null, speed: undefined }], // Array of { text: string, imageSrc: string | null, speed: number | undefined }
  backgroundSrc = '/nikogen/bg.png',
  speed = 50, // Default speed if not specified per message
  faceWidth = 96,
  faceHeight = 96,
}) => {
  const [messageIndex, setMessageIndex] = useState(0); // Index for the messages array
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [calculatedFontSize, setCalculatedFontSize] = useState(FONT_SIZE);
  const [isTypingComplete, setIsTypingComplete] = useState(false); // Track if current message is done typing
  const [arrowUp, setArrowUp] = useState(false); // State for arrow animation position
  const [currentFaceSrc, setCurrentFaceSrc] = useState(null); // State for the currently displayed face
  const textContainerRef = useRef(null);
  const componentRef = useRef(null); // Ref for the main div to handle focus/keypress

  const currentMessage = messages[messageIndex] || { text: "", imageSrc: null, speed: undefined }; // Get current message safely

  // Reset typewriter effect, font size, and completion status when messageIndex changes
  useEffect(() => {
    const initialFace = messages[messageIndex]?.imageSrc || null;
    setDisplayedText('');
    setCurrentIndex(0);
    setCalculatedFontSize(FONT_SIZE);
    setIsTypingComplete(false);
    setCurrentFaceSrc(initialFace); // Reset current face to the message's initial face
    // Focus the component when the message changes to allow keypress
    componentRef.current?.focus();
  }, [messageIndex, messages]); // Depend on messages array as well

  // Function to check overflow and adjust font size
  const checkAndAdjustFontSize = useCallback(() => {
    const element = textContainerRef.current;
    if (!element) return;

    let currentSize = FONT_SIZE;
    element.style.fontSize = `${currentSize}px`; // Apply default size for measurement

    // Check for overflow and decrease font size until it fits or hits minimum
    while (
      (element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth) &&
      currentSize > MIN_FONT_SIZE
    ) {
      currentSize--;
      element.style.fontSize = `${currentSize}px`;
    }
    // Set the final calculated size to state
    setCalculatedFontSize(currentSize);
  }, []); // No dependencies needed as it uses refs and constants

  // Typewriter effect logic with syntax parsing and per-message speed
  useEffect(() => {
    const textToType = currentMessage.text || "";
    const currentSpeed = currentMessage.speed !== undefined ? currentMessage.speed : speed; // Use message speed or default

    if (!textToType) {
      setIsTypingComplete(true); // Mark as complete if no text
      return;
    }

    if (currentIndex >= textToType.length) {
      // Typing finished for the current message
      setIsTypingComplete(true);
      checkAndAdjustFontSize();
      return;
    }

    // Ensure completion flag is false while typing
    setIsTypingComplete(false);

    // Check for face change syntax at the current index
    const remainingText = textToType.substring(currentIndex);
    const faceMatch = remainingText.match(FACE_SYNTAX_REGEX);

    let timeoutId;

    if (faceMatch && faceMatch.index === 0) { // Syntax found at the very start of remaining text
      const newFace = faceMatch[1];
      const syntaxLength = faceMatch[0].length;

      setCurrentFaceSrc(newFace); // Update the displayed face
      setCurrentIndex((prev) => prev + syntaxLength); // Skip the syntax

      // Trigger the next character immediately (or very shortly after)
      timeoutId = setTimeout(() => {
        // No-op, just to keep the effect loop going. The state change will trigger re-render and next effect run.
      }, 1); // Minimal delay
    } else {
      // No syntax, just type the next character
      timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + textToType[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, currentSpeed); // Use the determined speed
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, messageIndex, messages, speed, checkAndAdjustFontSize, currentMessage.text, currentMessage.speed]); // Add dependencies

  // Function to advance to the next message
  const advanceMessage = useCallback(() => {
    if (isTypingComplete && messageIndex < messages.length - 1) {
      setMessageIndex((prev) => prev + 1);
    }
    // Optional: Add logic for what happens after the last message (e.g., loop, close, callback)
  }, [isTypingComplete, messageIndex, messages.length]);

  // Handle Enter key press
  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      advanceMessage();
    }
  }, [advanceMessage]);

  // Determine if the arrow should be visible
  const showArrow = isTypingComplete && messageIndex < messages.length - 1;

  // Arrow Animation Effect
  useEffect(() => {
    let intervalId = null;
    if (showArrow) {
      intervalId = setInterval(() => {
        setArrowUp((prev) => !prev);
      }, ARROW_ANIMATION_INTERVAL);
    } else {
      setArrowUp(false); // Reset position when hidden
    }

    // Cleanup interval on unmount or when showArrow changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [showArrow]); // Rerun effect when arrow visibility changes

  return (
    <div
      ref={componentRef} // Add ref to the main div
      tabIndex={0} // Make the div focusable
      onClick={advanceMessage} // Advance on click
      onKeyDown={handleKeyPress} // Advance on Enter key press
      style={{
        position: 'relative',
        width: `${BOX_WIDTH}px`,
        height: `${BOX_HEIGHT}px`,
        margin: '1em auto',
        color: '#fff',
        overflow: 'hidden',
        cursor: showArrow ? 'pointer' : 'default', // Updated cursor logic
        outline: 'none', // Remove focus outline if desired
      }}
    >
      {/* Base Background Image using <img> */}
      <img
        src={backgroundSrc}
        alt="Textbox background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', // Fill container width
          height: '100%', // Fill container height
          objectFit: 'contain', // Maintain aspect ratio, fit within bounds
          zIndex: 0, // Ensure it's the bottom layer
        }}
      />

      {/* Character Image - Use currentFaceSrc state */}
      {currentFaceSrc && ( // Render image based on the currentFaceSrc state
        <div
          style={{
            position: 'absolute',
            left: `${FACE_OFFSET_X}px`,
            top: `${FACE_OFFSET_Y}px`,
            width: `${faceWidth}px`, // Container div controls size
            height: `${faceHeight}px`, // Container div controls size
            zIndex: 2, // Ensure face is above text and background
          }}
        >
          <img
            src={currentFaceSrc} // Use the state variable for the source
            alt="Character Face"
            style={{
              width: '100%', // Fill container div width
              height: '100%', // Fill container div height
              objectFit: 'contain', // Maintain aspect ratio within container
            }}
          />
        </div>
      )}

      {/* Text Area */}
      <div
        ref={textContainerRef}
        style={{
          position: 'absolute',
          left: `${TEXT_OFFSET_X}px`,
          top: `${TEXT_OFFSET_Y}px`,
          fontFamily: FONT_FAMILY,
          fontSize: `${calculatedFontSize}px`,
          maxWidth: `${FACE_OFFSET_X - TEXT_OFFSET_X - 10}px`,
          maxHeight: `${BOX_HEIGHT - TEXT_OFFSET_Y - 10}px`,
          lineHeight: '1.3',
          whiteSpace: 'pre-wrap',
          overflowWrap: 'break-word',
          overflowY: calculatedFontSize <= MIN_FONT_SIZE ? 'auto' : 'hidden',
          textAlign: 'left',
          zIndex: 1,
        }}
      >
        {/* Render logic for newlines remains the same */}
        {displayedText.split('\n').map((line, index, arr) => (
          <React.Fragment key={index}>
            {line}
            {index < arr.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>

      {/* Animated Arrow Indicator */}
      {showArrow && (
        <img
          src="/nikogen/textboxArrow.png" // Path to the arrow image
          alt="Next message indicator"
          style={{
            position: 'absolute',
            bottom: arrowUp ? `${ARROW_OFFSET_Y}px` : '0px', // Animate vertical position
            left: '50%', // Center horizontally
            transform: 'translateX(-50%)', // Fine-tune horizontal centering
            width: 'auto', // Adjust size as needed
            height: '16px', // Example height, adjust as needed
            zIndex: 3, // Ensure arrow is on top
            transition: 'bottom 0.15s ease-in-out', // Smooth transition for movement
          }}
        />
      )}
    </div>
  );
};

export default NikoGen;
