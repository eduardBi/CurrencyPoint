import  React , {useState,useEffect} from 'react';
import Searchbar from './currencySarch';
import fetchCurrency from './fetchCurrency';
import Table from './showTable';


import { FormControl, Button ,Grid,Container,InputLabel,Input} from '@material-ui/core';


const CurrencyList:React.FC =()=>{

    let  [showArray, setShowArray] = useState([]);
    let  [isClickedButton, setClickedButton] = useState(false);
    

    useEffect(()=>{
        setShowArray(fetchCurrency());    
        //использую кастомный хук
    },[])    

    
function handleMyInput(e){
    let textOfBar=e.target.value;
    let lengthOfSplit=textOfBar.length
    let prepareSearchArray=[];
    //беру символы введёные в строку и их количество 

        showArray.map((item,index)=>{
                let itemName=item.item.Name.substring(0,lengthOfSplit).toLowerCase();
                //по количеству символов в строке ввода сокращаю каждый объект списка
            if(itemName===textOfBar && lengthOfSplit>=0){
                //сравниваю символы введёные в строку с сокращенными названиями  каждого обекта листа 
                //создаю флаг "isSearching" по которому вывожу список
                prepareSearchArray.push({...item,isSearching:true});
            }else{
                prepareSearchArray.push({...item ,isSearching:false});
            }
        })
    setShowArray(prepareSearchArray);
}

    
 return (
     <div className="currency-wrapper-item" style={{marginTop:"7rem"}}  >
         
            
         
            {isClickedButton? <Container   maxWidth="lg">
                <Searchbar   onMyInput={handleMyInput}></Searchbar> 
                <Table  table={showArray}></Table>
            </Container>
            :
            <div style={{display:'flex', justifyContent:"center",paddingTop:"7rem"}}>
            <Button   variant="outlined" color="primary" onClick={()=>setClickedButton(true)}>загрузить список валюты</Button>
            </div>}

     
         </div>
     
 
)

}

  

export default CurrencyList;
     