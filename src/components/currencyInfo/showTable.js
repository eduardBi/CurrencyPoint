import React from 'react';
import CurrencyItem from './currencyItem';
import { Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const showTable = (props) => {

    let table=props.table;
    let switcher=props.switcher;
    
    
    return (
        <Grid container item xs={12}>
           {
               table.map((item,index)=>item.isSearching? <Grid container item xs={12} md={6} > 
                        <CurrencyItem switcher={switcher} props={item}>
                        </CurrencyItem>
                    </Grid>:'')
           }

           {
               table.length<=1? <Typography variant="h4" style={{margin:"0 auto"}} >не удалось подключится к серверу</Typography>:''
           }
        </Grid>
    );
}

export default showTable;
