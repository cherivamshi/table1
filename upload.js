import React from 'react';
import { recognize } from 'tesseract.js';

function UploadButton({ onUpload }) {
  const handleFileChange = async (event) => {
    const file = event.target.files[0]; 
    const ocrText = await recognize(file);
    console.log("Extracted text:", ocrText.data.text); // Logging extracted text to console
    onUpload(ocrText.data.text); 
  };

  return (
    <div>
      <label htmlFor="file-upload">Upload Image:</label>
      <input
        id="file-upload"
        type="file"
        accept="image/*" 
        onChange={handleFileChange}
      />
    </div>
  );
}

export default UploadButton;
