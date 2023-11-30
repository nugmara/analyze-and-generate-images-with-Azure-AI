// azure-image-analysis.js

import axios from 'axios';

const analyzeImage = async (imageUrl, visualFeatures = 'Categories,Description,Color') => {
  const apiKey = '7e088790d7da412c939e1edd786fd2ef'; // Replace with your Azure AI key
  const endpoint = 'https://perritos.cognitiveservices.azure.com/vision/v3.0/analyze';

  try {
    const response = await axios.post(
      `${endpoint}?visualFeatures=${visualFeatures}`,
      { url: imageUrl },
      {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': apiKey,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error.message);
    throw error;
  }
};

export default analyzeImage;

