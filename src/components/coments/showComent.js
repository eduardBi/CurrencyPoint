import  React  from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import SingleComent from './singleComent'








function ShowComents(data){
    
    let id=data.id
    let onlyThisComents=useSelector(item=>item.coments)
    let info=onlyThisComents.filter(item=>item.postId===id);
    

return(
    <div >
            {
           
           info.map(item=>{
                    return <SingleComent key={item.id} data={item}></SingleComent>
                }) 

            
        }  
        
    </div>
    )
    
}


        
  
  
export default ShowComents;