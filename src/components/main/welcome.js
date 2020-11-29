import  React , {useState,useEffect} from 'react';
import {Typography,Container} from '@material-ui/core';

const Welcome:React.FC =()=>{
       
           
           
           
           
 return (
     <div style={{margin:"7rem 0",paddingTop:'10%'}} className="big-msg" >
         <Container maxWidth="md">
            <Typography variant="h4" >
                       на сайте "Валютный центр"  можно узнать курсы валют , а также воспользываться калькулятором валют в соответствующих разделах навигации
            </Typography>
        </Container>
     </div>
 
 )
}


export default Welcome;