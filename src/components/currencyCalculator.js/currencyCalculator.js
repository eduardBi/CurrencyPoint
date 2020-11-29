import React from 'react';
import fetchCurrency from '../currencyInfo/fetchCurrency';
import Select from './select';
import   {useState,useEffect} from 'react';
import {Typography, FormHelperText,FormControl ,Button,Grid,Container,InputLabel,Input} from '@material-ui/core';


const CurrencyCalculator = () => {
    
    
    let  [showArray, setShowArray] = useState([]);
    let  [answer, setAnswerState] = useState(false);
    let  [isClickedButton, setClickedButton] = useState(false);
    let  [multiplier, setMiltiplierState] = useState(1);
    

    useEffect(()=>{
        setShowArray(fetchCurrency());
    },[]);
    
    useEffect(()=>{
        if(isClickedButton && document.querySelector('select')){
            setAnswer()
        }else{
            setAnswerState('сервер не ответил')
        }
    });
    
        function setMultiplier(e){ 
                setMiltiplierState(e.target.value);
        }



        function setAnswer(){

        
                    
            let first=document.querySelector('#firstInput').value;
            let second=document.querySelector('#secondInput').value;    
        

        
            if(multiplier>=1){
                setAnswerState('Итого:'+(parseFloat(first/second)*multiplier).toFixed(3));
            }else{
                setAnswerState("числа меньше \"1\" не поддерживаются");
            }
            
        }
    
    
    return (
        <div style={{marginTop:"7rem"}}>
            
        {isClickedButton  ? <Container  maxWidth="lg">
                <div  style={{margin:"1rem 40%",display:'block'}}>
                    <FormControl  >
                        <Input value={multiplier} onChange={setMultiplier} placeholder="найти"  id="my-input"  />
                        <FormHelperText>введите количество валюты</FormHelperText>
                    </FormControl>
                </div>
                <Grid container item xs={12}>
                    <Grid  item xs={12} md={6}>
                        <Select  setAnswer={setAnswer}   id={'firstInput'} data={showArray} ></Select>  
                    </Grid>    
                    <Grid item xs={12} md={6} >
                        <Select  setAnswer={setAnswer} id={'secondInput'} data={showArray}></Select>  
                    </Grid>
                    <Typography variant='h4' style={{margin:"1rem auto"}} id="answe" >{answer}</Typography>
                </Grid>
        </Container>
        :
        <div style={{display:'flex', justifyContent:"center",paddingTop:"7rem"}}>
            <Button   variant="outlined" color="primary" onClick={()=>setClickedButton(true)}>загрузить калькулятор</Button>
        </div>
            }    
        
        </div>
        
    );
}

export default CurrencyCalculator;
