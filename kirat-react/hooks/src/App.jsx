import { memo, useCallback, useMemo } from 'react';
import { useEffect, useState } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 5000)
  }, [])

  // const cryptoReturns = useMemo(()=>{
  //   console.log("this statement ran");
  //   return exchange1Data.returns + exchange2Data.returns;
  // }, [exchange1Data, exchange2Data])
  

  const calculateCryptoReturns = useCallback(function(){
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data])


  const CryptoGainsCalculator = memo(function({calculateCryptoReturns}){
    console.log("crpto child re-rendered");
    return (
      <div>
        Your crypto returns are {calculateCryptoReturns}
      </div>
    )
    
  })


  // const incomeTax = (cryptoReturns + bankData.income) * 0.3

  // return (
  //   <div>
  //       hi there, your income tax returns are {incomeTax}
  //   </div>
  // )

  return (
    <div>
      <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns}/>
    </div>
  )



}

export default App