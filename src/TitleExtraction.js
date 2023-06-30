import React, {useEffect, useState} from "react";

const TitleExtraction = (props) => {
  const [data, setdata] = useState({
    mode: "tags",

    numWords: "10",
    elementName1: "",
    elementName2: "",
    elementName3: "",
  });
    useEffect(() => {
    props.onChange(props.childName, {
        mode: data.mode,
        titleTags: {
            numWords: data.numWords,
            titleTags: [
                {
                    elementName: data.elementName1,
                },
                {
                    elementName: data.elementName2,
                },
                {
                    elementName: data.elementName3,
                },
            ],
        },
    });
    }, [data]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: value };
    });

  };
  return (
    <div>
        <h2>Title Extraction</h2>
      <label className="m-2">
        mode : <input type="text" name="mode" onChange={handleChange} />
      </label>
      <br />
      <label className="m-2">
        Number Of Words:{
" "}
        <input type="text" name="numWords" onChange={handleChange}></input>
      </label>{" "}
      <br />
      <label className="m-2">
        element Name:{" "}
        <input type="text" name="elementName1" onChange={handleChange}></input>
      </label>
      <br />
      <label className="m-2">
        element Name:{
" "}
        <input type="text" name="elementName2" onChange={handleChange}></input>
      </label>
      <br />
      <label className="m-2">
        element Name :{
" "}
        <input type="text" name="elementName3" onChange={handleChange}></input>
      </label>
      <br />
    </div>
  );
};
export default TitleExtraction;
