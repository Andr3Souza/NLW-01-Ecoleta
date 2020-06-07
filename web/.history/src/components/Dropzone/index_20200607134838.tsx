import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import "./styles.css";

const Dropzone = () => {
  const [selectedFilesUrl, setSelectedFilesUrl] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFilesUrl(fileUrl);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*"></input>

      {selectedFilesUrl ? (
        <img src={selectedFilesUrl}></img>
      ) : (
        <p>
          <FiUpload></FiUpload>
          Imagen do estabelicimento
        </p>
      )}
    </div>
  );
};
export default Dropzone;
