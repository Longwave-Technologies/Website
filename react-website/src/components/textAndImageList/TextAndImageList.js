import React from 'react';
import { importImages } from '../imageImporter';

// const data = [
//   {
//     text: 'Item 1',
//     imageUrl: 'url-to-image-1.jpg',
//   },
//   {
//     text: 'Item 2',
//     imageUrl: 'url-to-image-2.jpg',
//   },
//   {
//     text: 'Item 3',
//     imageUrl: 'url-to-image-3.jpg',
//   },
//   // Add more items as needed
// ];

function TextAndImageList () {
  return (
    <div className="text-and-image-list">
      {importImages.map((item, index) => (
        <div key={index} className="row">
          <div className="text">{item.text}</div>
          <img className="image" src={item.imageUrl} alt={item.text} />
        </div>
      ))}
    </div>
  );
};

export default TextAndImageList;
