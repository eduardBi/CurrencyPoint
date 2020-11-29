import  React , {useState,useEffect} from 'react';
import { Grid,Typography} from '@material-ui/core';


const Footer:React.FC =()=>{
                  
 return (
        
        <Grid container   style={{background:'#3f51b5'}} item xs={12}>
                    <Grid  item xs={12} style={{textAlign:'center',color:'white'}} md={6}>
                            <Typography  variant='h4' style={{margin:"1rem auto"}} id="answe" >&copy; copyright eduard</Typography>
                    </Grid>    
                    <Grid item xs={12} md={6}   style={{display:'flex',justifyContent:'space-between',margin:'auto'}} >
                        <Grid style={{margin:'1rem'}} item xs={4}  >
                            <a target="_blank"   className="nav-item"  href="https://vk.com/bommeduard" >vk</a>
                        </Grid>
                        <Grid item style={{margin:'1rem'}} xs={4}  >
                             <a className="nav-item" href="">facebook</a>
                        </Grid>
                        <Grid style={{margin:'1rem'}} item xs={4}  >
                             <a className="nav-item"  href="">twitter</a>
                        </Grid>
                    </Grid>
                    
                </Grid>   
     
 
 )
}


export default Footer;