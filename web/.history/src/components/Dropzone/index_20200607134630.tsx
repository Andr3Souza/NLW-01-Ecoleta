import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import "./styles.css";

const [selectedFilesUrl, setSelectedFilesUrl] = useState("");
const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*"></input>
      <p>
        <FiUpload></FiUpload>
        Imagen do estabelicimento
      </p>
    </div>
  );
};
export default Dropzone;
