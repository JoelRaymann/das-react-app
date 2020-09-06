import React from "react";
import { CSVReader } from "react-papaparse";

import "./add-student-csv.styles.scss";

function AddStudentCSVComponent({ setStudentListData }) {
  // In-built-functions

  function handleOnDrop(data) {
    console.log("---------------------");
    console.log(data[0].data);
    console.log("---------------------");
  }

  function handleOnError(error, file, inputElem, reason) {
    console.log(error);
  }

  function handleOnRemoveFile(data) {
    console.log("---------------------");
    console.log(data);
    console.log("---------------------");
  }

  // Render
  return (
    <div className="add-student-csv-container">
      <div className="add-student-csv-title">Click and Drag Upload</div>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        onRemoveFile={handleOnRemoveFile}
        style={{
          dropArea: {
            borderColor: "green",
            borderRadius: 10,
            maxWidth: "700px",
            minWidth: "500px",
            height: 100,
          },
          dropAreaActive: {
            borderColor: "lightgreen",
          },
          dropFile: {
            width: "100%",
            background: `no-repeat center url(${
              process.env.PUBLIC_URL +
              "/assets/icons/add-students-icon/csv_icon.svg"
            })`,
            backgroundSize: "50px 50px",
          },
          fileSizeInfo: {
            display: "none",
          },
          fileNameInfo: {
            position: "absolute",
            top: "120px",
            color: "#000000",
            backgroundColor: "transparent",
            borderRadius: 3,
            fontSize: 14,
            lineHeight: 1,
            padding: "0 0.4em",
          },
          removeButton: {
            color: "red",
          },
          progressBar: {
            position: "absolute",
            width: "100%",
            top: "50px",
            backgroundColor: "green",
          },
        }}
      >
        <span>Drop CSV file here or click to upload</span>
      </CSVReader>
    </div>
  );
}

export default AddStudentCSVComponent;
