import React from "react";

const ImagePreview = ({ selectedImage }) => {
  return (
    <div>
      {selectedImage ? (
        <img src={selectedImage} alt="Selected" />
      ) : (
        <p>Bir resim seçin...</p>
      )}
    </div>
  );
};

export default ImagePreview;
