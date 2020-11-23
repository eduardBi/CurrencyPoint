import  React  from 'react';
import  {useState}  from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import AddPost from "./addPost";
import SinglePost from "../OnePost/singlePost";





function OneTopic(props){
    const [comentData, SetComentData] = useState([]);
    //обрабатываю инпуты
    let AllTopics=useSelector(item=>item.Reviews);
    //получаю все статьи
    let username=useSelector(item=>item.isLogged.userName);

    let linkPath=useHistory().location.pathname;
    let arrayOfLink=linkPath.split('/');
    let topic=arrayOfLink[arrayOfLink.length-1];
    let OneTopic=AllTopics.filter(item=>item.topic===topic);
    //получаю статьи отфильтрованные  по разделам


    
    let dispatchPost=useDispatch();


    let date= new Date;
    let PostDate=`${ date.getDate()} ${ date.getMonth()} ${date.getFullYear()}`

    function AddNewPost(e){
        e.preventDefault();

        if(comentData.text && comentData.title){
                dispatchPost({type:"addPost",payload:{
                    topic:topic,  
                    isNew:true,
                    senderName:username,
                    senderText:comentData.text,
                    date:PostDate,
                    title:comentData.text,
                }})
        
    }
        document.querySelector('textarea').value='';
        document.querySelector('input').value='';
        SetComentData([]);
        



    }

    function handleInput(e){
        
        SetComentData({...comentData,[e.target.name]:e.target.value});
        
        
    }
    
return(
    <div >

          
              
        {OneTopic.length>0?(
            <>


            <img src={require(`../../img/${topic}.jpg`).default} className="bg" alt=""/>

            <h2 className="section-title">Последние новости из раздела {topic} </h2>
          <section className="section-wrapper">
                 {OneTopic.map(item=>{
                    return <SinglePost key={item.id} data={item}></SinglePost>
                })} 
         </section>
           <h2 className="section-title">Добавьте  новость в раздел  {topic} </h2>
          <section className="section-wrapper">
                <AddPost AddNewPost={AddNewPost} handleInput={handleInput}></AddPost>  
          </section>
          </>)
          : <h1 className="py-5 text-center text-uppercase">данной категории не существует</h1>

        }
    </div>
    )
    
}


        
  
  
export default OneTopic;