import React from 'react';
import MyTableComponent from './table';
import UploadButton from './upload';

function App() {
  const handleUpload = (text) => {
    console.log("Extracted text:", text); // Log extracted text to console
  };

  return (
    <div>
      <MyTableComponent />
      <UploadButton onUpload={handleUpload} />
    </div>
  );
}

export default App;
