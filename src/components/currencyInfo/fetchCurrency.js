
function  FetchData() {
    
    let CurrencyValute=[];
    
let fetchData = async () => {
    
    try{
    let res = await fetch(
        "https://www.cbr-xml-daily.ru/daily_json.js" 
    );
    let response = await res.json();
        Object.keys(response.Valute).map(function(key) {
            CurrencyValute.push({item:response.Valute[key],isOpen:false,isSearching:true});
            // прохожу через  массив по ключам 
            
        });
        return CurrencyValute
    }catch(e){
        return CurrencyValute.push( [{item:{
            Name:'server not loaded'
        }}])
    }}
    fetchData();
    return  CurrencyValute
 };
 export default FetchData;