import axios from 'axios';


const url = 'https://data-asg.goldprice.org/dbXRates/EGP'

export const goldDaily = async (usd) => {
    try {
        let getPrice = await axios.get(`https://data-asg.goldprice.org/dbXRates/${usd}`)
       const {date,items} = getPrice.data;
    //    console.log(getPrice);
        return {date,items}
    } catch (error) {
        console.log(error);
    }    
}


// api exchanges 

const endpoint = 'live';
const access_key = 'ac9f3edb58c9596590fa07df9099279c'; 
const urlExchange = 'http://apilayer.net/api/'

export const exchange = async () => {
    try {
        let dataExchange = await axios.get(`${urlExchange}${endpoint}?access_key=${access_key}`)
        console.log(dataExchange);
        const { quotes: {USDEGP,USDSAR,USDAED,USDTRY}, timestamp,source} = dataExchange.data;
        // console.log(USDEGP,source);
        return { quotes: {USDEGP,USDSAR,USDAED,USDTRY}, timestamp,source}
    } catch (error) {
        console.log(error);
    }
} 