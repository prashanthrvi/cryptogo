// Write your JS code here
// Write your JS code here
import { Component } from "react"
import "./index.css"
import CryptocurrencyItem from "../CryptocurrencyItem"

class CryptocurrenciesList extends Component {
  state = { cryptoList: [] }

  componentDidMount() {
    this.getCryptoInfo()
  }

  getCryptoInfo = async () => {
    const response = await fetch(
      "https://apis.ccbp.in/crypto-currency-converter"
    )
    const convertedData = await response.json()
    console.log(convertedData)

    const updatedData = convertedData.map((eachData) => ({
      logo: eachData.currency_logo,
      name: eachData.currency_name,
      usd: eachData.usd_value,
      euro: eachData.euro_value,
      id: eachData.id,
    }))
    this.setState({ cryptoList: updatedData })
  }

  render() {
    const { cryptoList } = this.state
    return (
      <div className="card">
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <table>
          <tr>
            <th className="cointype">Coin Type</th>
            <th className="currencies">USD</th>
            <th className="currencies">EURO</th>
          </tr>
          {cryptoList.map((eachList) => (
            <CryptocurrencyItem cryptoList={eachList} key={eachList.id} />
          ))}
        </table>
      </div>
    )
  }
}

export default CryptocurrenciesList
