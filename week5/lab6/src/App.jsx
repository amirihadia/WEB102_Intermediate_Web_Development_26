import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState(null)
  const API_KEY = import.meta.env.VITE_APP_API_KEY

  useEffect(() => {
    const fetchAllCoinData = async () => {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/top/totaltoptiervol?limit=10&assetClass=ALL&tsym=usd&api_key=' + API_KEY
        )
        const json = await response.json()
        setList(json)
      } catch (error) {
        console.error(error)
      }
    }

    fetchAllCoinData()
  }, [API_KEY])

  const coins = list?.Data
    ?.map(data => data.CoinInfo)
    .filter(
      coinData => coinData.Algorithm !== 'N/A' && coinData.ProofType !== 'N/A'
    )

  return (
    <div className="whole-page">
      <h1>My Crypto List</h1>
      <ul>
        {coins?.map(coinData => (
          <li key={coinData.FullName}>{coinData.FullName}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
