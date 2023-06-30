import React, { useState } from "react";
import Formats from "./Formats";
import TitleExtraction from "./TitleExtraction";
import SynopsisExtraction from "./SynopsisExtraction";
import AttributesAndTags from "./AttributesAndTags";
const Source = () => {
  const [data, setData] = useState({
    baseUrl: "",
    path: "",
    storageType: "",
    amazonAccessKey: "",
    amazonS3BucketName: "",
    amazonS3BucketRegion: "",
    amazonS3FolderPath: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const onChildChange = (key, e) => {
    console.log("changing " + key);
    data[key] = e;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("'source':{" + JSON.stringify(data) + "}");
  };
  return (
    <div>
      <form>
        <label className="m-4">baseUrl</label>
        <input type="text" name="baseUrl" onChange={changeHandler} />
        <h3 className="m-4">Extraction Settings (File System Mode)</h3>
        <div className="parent">
          <div className="child">
            <label className="m-4">path</label>
            <input type="text" name="path" onChange={changeHandler} />
            <br />
            <label className="m-4"> storageType</label>
            <input type="text" name="storageType" onChange={changeHandler} />
            <br />
            <label className="m-4">amazonAccessKey*</label>
            <input
              type="text"
              name="amazonAccessKey"
              onChange={changeHandler}
            />
          </div>
          <div className="child">
            <label className="m-4">amazonS3BucketName*</label>
            <input
              type="text"
              name="amazonS3BucketName"
              onChange={changeHandler}
            />
            <br />
            <label className="m-4"> amazonS3BucketRegion*</label>
            <input
              type="text"
              name="amazonS3BucketRegion"
              onChange={changeHandler}
            />
            <br />
            <label className="m-4">amazonS3FolderPath*</label>
            <input
              type="text"
              name="amazonS3FolderPath"
              onChange={changeHandler}
            />
            <br />
          </div>
          <Formats onChange={onChildChange} childName="extensions" />
          <TitleExtraction
            onChange={onChildChange}
            childName="titleExtraction"
          />
          <SynopsisExtraction  onChange={onChildChange}
                               childName="synopsisExtraction"/>
          <AttributesAndTags onChange={onChildChange} childName="attributesAndTags"/>
          <button onClick={submitHandler} className="btn btn-primary m-4">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Source;
