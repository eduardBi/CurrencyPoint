import  React  from 'react';
import Currency from './components/currencyInfo/currencyList'
import CurrencyCalc from './components/currencyCalculator.js/currencyCalculator'
import HeaderNav from './components/main/header'
import Footer from './components/main/footer'
import Wellcome from './components/main/welcome'
import './index.css'

      
import { Switch, Route } from 'react-router-dom'



const App:React.FC =()=>{
       
 return (
     <div>
     
     <HeaderNav></HeaderNav>
     <main>
        <Switch>
                <Route exact path='/currency' component={Currency}/>
                <Route exact path='/currency/calculator' component={CurrencyCalc}/>
                <Route exact path='/' component={Wellcome}/>
        </Switch>
     </main>   
     

     <Footer></Footer>
     </div>
 
 )
}


export default App;