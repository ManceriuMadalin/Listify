import React, { useState, useEffect } from "react";

export default function Avatar(props) {
  const [image, setImage] = useState(props.img || props.img);

  useEffect(() => {
    const database = localStorage.getItem("image")
    if (database) {
        setImage(JSON.parse(database));
    }
  }, []);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setImage(event.target.result);
        localStorage.setItem("image", JSON.stringify(image))
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
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
        style={{ cursor: "pointer" }}
        onClick={() => document.getElementById("fileInput").click()}
      />
    </div>
  );
}
