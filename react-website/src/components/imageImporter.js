// imageImporter.js
export function importImages(imageFolderPath) {
    const imageContext = require.context(imageFolderPath, false, /\.(png|jpg|jpeg|gif|svg)$/);
  
    const images = imageContext.keys().map(imageContext);
  
    return images;
  }
  