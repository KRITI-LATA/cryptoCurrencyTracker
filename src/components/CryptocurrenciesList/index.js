// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedCryptoData = data.map(eachCrypto => ({
      id: eachCrypto.id,
      currencyName: eachCrypto.currency_name,
      usdValue: eachCrypto.usd_value,
      euroValue: eachCrypto.euro_value,
      currencyLogo: eachCrypto.currency_logo,
    }))
    this.setState({cryptoData: formattedCryptoData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state

    return (
      <div className="app-container">
        <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="crypto-app-container">
          <div className="coin-container">
            <p className="coin-type-text">coin Type</p>
            <div className="type-text-container">
              <p className="coin-type-text usd-text">USD</p>
              <p className="coin-type-text euro-text">EURO</p>
            </div>
          </div>

          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <ul className="crypto-container">
              {cryptoData.map(eachData => (
                <CryptocurrencyItem key={eachData.id} dataList={eachData} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
