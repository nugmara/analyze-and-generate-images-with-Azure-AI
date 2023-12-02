// App.js

import React, { useState } from 'react';
import  {analyzeImage} from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [input, setInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAnalyzeClick = async () => {
    setIsLoading(true);

    try {
      const result = await analyzeImage(imageUrl);
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error analyzing image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerationButtonClick = async () => {
    setIsLoading(true);

    try {
      // Add code for image generation here
      // await generateImage(input);
      console.log('Image generated for prompt:', input);
      // You might want to do something with the generated image, like displaying it
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const DisplayResults = () => {
    if (!analysisResult) {
      return null;
    }

    return (
      <div>
        <h2>Analysis Results</h2>
        <p>Image URL: {imageUrl}</p>
        <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
      </div>
    );
  };

  return (
    <div>
      <h1>Image Analysis App</h1>

<label htmlFor="imageUrl">Enter Image URL:</label>
<input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />

<label htmlFor="prompt">Enter Prompt:</label>
<input type="text" id="prompt" value={input} onChange={handleInputChange} />

<button onClick={handleAnalyzeClick} disabled={isLoading}>
  Analyze
</button>

<button onClick={handleGenerationButtonClick} disabled={isLoading}>
  Generate Image
</button>

{isLoading && <p>Processing...</p>}

<DisplayResults />
    </div>
  );
}

export default App;

