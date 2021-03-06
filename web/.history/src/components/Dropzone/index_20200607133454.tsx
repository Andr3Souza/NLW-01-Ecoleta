import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function Mydropzone() {
  const onDrop = useCallback((acceptedFiles) => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps}></input>
      {isDragActive ? (
        <p>Drop files here...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
export default Mydropzone;
