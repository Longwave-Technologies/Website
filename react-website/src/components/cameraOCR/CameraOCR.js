import React, { useState } from 'react';
import './CameraOCR.css';
import { default as camera } from "../../assets/images/camera.png";
import Tesseract from 'tesseract.js';

function CameraOCR ({onTextChange}) {
    const [capturedImage, setCapturedImage] = useState(null);
  
    const handleImageCapture = (e) => {
      const file = e.target.files[0];
  
      // Display the captured image
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setCapturedImage(event.target.result);
    
        // Perform OCR using Tesseract.js
        // const Tesseract = require('tesseract.js');
        Tesseract.recognize(
          file,
          'eng', // English language
        ).then(({ data: { text } }) => {
            onTextChange(text); // Pass the recognized text to the parent component
        });
    };
        reader.readAsDataURL(file);
      }
    };
    return(
        <div className="CameraOCR">
            <label htmlFor="imageInput"  className="cameraSubmit"
            >
                <img src={camera} alt="camera" className="camera"/>
            </label>
            <input
                id="imageInput"
                type="file"
                accept="image/*"
                capture="camera"
                onChange={handleImageCapture}
            />
            {capturedImage && <img src={capturedImage} alt="Captured" />}
        </div>
    );
}
export default CameraOCR;