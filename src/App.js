// App.js

import React, { useState } from 'react';
import  analyzeImage from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
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

      <button onClick={handleAnalyzeClick} disabled={isLoading}>
        Analyze
      </button>

      {isLoading && <p>Processing...</p>}

      <DisplayResults />
    </div>
  );
}

export default App;

