// azure-image-analysis.js

import axios from 'axios';
require('dotenv').config();


const analyzeImage = async (imageUrl, visualFeatures = 'Categories,Description,Color') => {
  const apiKey = process.env.KEY_NAME; // Replace with your Azure AI key
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

