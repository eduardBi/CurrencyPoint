import  React  from 'react';

import { FormControl,FormHelperText  ,InputLabel,Input} from '@material-ui/core';


const SearchBar:React.FC =(props)=>{
let input=props.onMyInput;
    
    return (
        <div  style={{margin:"1rem 40%",display:'block'}}>
            <FormControl  >
                <Input  onChange={input} placeholder="найти"  id="my-input"  />
                <FormHelperText>введите наименование валюты</FormHelperText>
            </FormControl>
       </div>
       
        
    )
}


export default SearchBar;