import {useEffect,useState} from "react";

function useCurrencyInfo(currency){
    /* Now we want to call API. So I want to call API whenever
      this customHook will be triggered.
      As soon as lifecycle of this hook triggers , API calls
      automatically. 
      It is the same case as generating password in previous project
      as soon as web page loads.
      So obviously for that purpose we'll use useEffect.
      */
      const [data,setData] = useState({})
     useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json()) //Implicit Return , if you use {} you need to write return (Explicit Return)
        .then((res)=>setData(res[currency]))
     },[currency])
    //Now our mind can say that return [data,setData] as this what hook return a array of variable and method.
    // But according to sir, this approach is not suitable here.
    // Hence for now , we'll return only data;
    return data;
}
export default useCurrencyInfo;