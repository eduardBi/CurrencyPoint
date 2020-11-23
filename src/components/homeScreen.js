import  React  from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom";
import  SinglePost from "./OnePost/singlePost"






function HomeScreen(){
    let allReviews=useSelector(item=>item.Reviews);
    let OnlyNew=allReviews.filter(item=>item.isNew===true);
    
    
return(
    <div >
                <img src={require(`../img/news.jpg`).default} className="bg" alt=""/>
            <h2 className="section-title">Последние новости в мире </h2>
                    <section className="section-wrapper">
          
          
            {
            OnlyNew.map(item=>{
                return <SinglePost key={item.id} data={item}></SinglePost>
                

            })

            
            //вывод всех новых статей статей
        }  
        </section>
    </div>
    )
    
}


        
  
  
export default HomeScreen;