import React, { useState, useEffect } from "react";

export default function Avatar(props) {
  const [image, setImage] = useState(props.img || props.img);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setImage(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageChange}
      />
      <img
        src={image}
        alt="Profile"
        style={{ cursor: "pointer", width: props.width }}
        onClick={() => document.getElementById("fileInput").click()}
      />
    </>
  );
}
