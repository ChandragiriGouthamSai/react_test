import React, {useEffect, useState} from "react";

const SynopsisExtraction = (props) => {
    const [data, setData] = useState({
        mode: "tags",

        numWords: "10",
        elementName1: "",
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
            ],
        },
    });
    }, [data]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value };
        });

    };
    return (
        <div>
            <h2>Synopsis Extraction</h2>
        <label className="m-2">
            mode : <input type="text" name="mode" onChange={handleChange}/>
        </label><br/>
            <label className="m-2">
                Number Of Words:{
                " "} <input type="text" name="numWords" onChange={handleChange}/>
            </label><br/>
            <label className="m-2">
                element Name:{" "}
                <input type="text" name="elementName1" onChange={handleChange}/>
            </label>
        </div>
)
}
export default SynopsisExtraction;