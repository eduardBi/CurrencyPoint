import React from 'react';
import   {useState,useEffect} from 'react';



const SelectField = (props) => {
    let data=props.data;
    let id=props.id;
    let setAnswer=props.setAnswer;
    
    return (
        <div>
            {data.length>1?
            <select  as="select"  style={{width:'95%',padding:'1rem',boxSizing:'border-box',margin:'1rem'}} onClick={setAnswer} id={id} >
            {
                data.map(item=>{
                    return <option name={item.item.Name} value={item.item.Value/item.item.Nominal}>{item.item.Name}</option>
                })
            }
            </select>
            :
                ""
        }
            
        </div>
    );
}

export default SelectField;
