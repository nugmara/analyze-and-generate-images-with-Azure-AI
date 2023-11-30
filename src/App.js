import React from 'react';
import { useState } from 'react';

function App() {
const [input, setInput] = useState("");



const handleInputChange = (e) => { 
  setInput(e.target.value);
}

const handleAnalysisButtonClick = () => { 
  // Add code here to analyze the image
  console.log("Analyzing image: ", input);
}

const handleGenerationButtonClick = () => { 
  // Add code here to generate an image
  console.log("Generating image: ", input);
}

  return (
    <div> 
    
      <h1>Computer Vision</h1>

      <label htmlFor="imageUrl">Enter the image URL or Prompt:</label>
      <input 
      type="text" 
      id="imageUrl"
      value={input}
      onChange={handleInputChange}
      />

      <br />

      <button onClick={handleAnalysisButtonClick}>Analyse Image</button>
      <button onClick={handleGenerationButtonClick}>Generate image</button>
    
    </div>

  )
}

export default App;
