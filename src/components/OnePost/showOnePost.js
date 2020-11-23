import  React   from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import AddComent from "./addComent";
import ShowComent from "../coments/showComent";
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { Link} from "react-router-dom";
import SinglePost from "./singlePost";





function OnePost(){

    const [comentData, SetComentData] = useState();
    let username=useSelector(item=>item.isLogged.userName);
    let linkPath=useHistory().location.pathname;
    let arrayOfLink=linkPath.split('/');
    let id=parseInt(arrayOfLink[arrayOfLink.length-1]);
    
    let ThisTopic=useSelector(item=>item.Reviews)
    let [info]=ThisTopic.filter(item=>item.id===id);
    //получаю  id поста из url

    let dispatchComent=useDispatch();
    let date= new Date;
    let PostDate=`${ date.getDate()} ${ date.getMonth()} ${date.getFullYear()}`
    


    function addComent(e){
        e.preventDefault();

        if(comentData){
            
        
        dispatchComent({type:"AddComent",payload:{
            senderName:username,
            senderText:comentData,
            postId:id,  
            date:PostDate,
        }})
        document.querySelector('input').value='';
        SetComentData('')
    }
    }
    
    function handlInput(e){
        SetComentData(e.target.value);
        console.log(comentData);
    }

    
return(
    <div >
            <img src={require(`../../img/onepost.jpg`).default} className="bg" alt=""/>

<h2 className="section-title">{info.title}   </h2>
          <section className="section-wrapper">
            <SinglePost data={info}></SinglePost>
            </section>

            <h2 className="section-title">Коментарии по данному поводу</h2>
            <section className="section-wrapper">
            <ShowComent id={id}></ShowComent>
            </section>
             
            <h2 className="section-title">оставьте своё мнение</h2>
            <section className="section-wrapper">
            <AddComent addComent={addComent}  handleInput={handlInput}></AddComent>          
            </section>
             
             
    </div>
        
    )
    
}


        
  
  
export default OnePost;
