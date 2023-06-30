import React, {useEffect, useState} from "react";
const AttributesAndTags=(props)=>{
    const [data,setData]=useState({
        concept1:"",
        taxo1:"",
        concept2:"",
        taxo2:""
    });
    useEffect(() => {
        props.onChange(props.childName,{ template: {
            tags: [
                {
                    concept: data.concept1,
                    taxo: data.taxo1,
                },
                {
                    concept: data.concept2,
                    taxo: data.taxo2
                }
            ]
        }})
    }, [data]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value };
        });

    };
    return(
        <div>
            <h2>Attributes and Tags</h2>
            <label className="m-2">
                concept : <input type="text" name="concept1" onChange={handleChange}/>
            </label><br/>
            <label className="m-2">
                Taxo : <input type="text" name="taxo1" onChange={handleChange}/>
            </label><br/>
            <label className="m-2">
                concept : <input type="text" name="concept2" onChange={handleChange}/>
            </label><br/>
            <label className="m-2">
                Taxo : <input type="text" name="taxo2" onChange={handleChange}/>
            </label><br/>
        </div>
    )
}
export default AttributesAndTags;