import React, { useState } from "react";
const fileType=["html", "xml", "pdf", "doc","docx", "docm", "txt",  "xls", "xlsx", "xlsm",  "xlsb", "ppt", "pptx", "pptm", "pdfslicing"];

const Formats = (props) =>{

    const [data,setdata]=useState({
        html:"no",
        xml:"no",
        pdf:"no",
        doc:"no",
        docx:"no",
        txt:"no",
        xls:"no",
        xlsx:"no",
        xlsm:"no",
        xlsb:"no",
        ppt:"no",
        pptx:"no",
        pptm:"no",
        pdfslicing:"no",
    });
    const handleChange = (e) =>{
        const {name}=e.target;
        setdata((prev)=>{
          return {...prev,[name]:"yes"};
        })
        props.onChange(props.childName,data);
    }
    return(
        <div>
            <h2>Formats</h2>
            {
            fileType.map((eachvalue)=>{
            return <div key={eachvalue}>
            <input value = {eachvalue} type = "checkbox" name={eachvalue} onChange={handleChange} />
            <span> {eachvalue} </span>       
                </div>
            }
                )
            }
        </div>    
    )
      
}
export default Formats;
