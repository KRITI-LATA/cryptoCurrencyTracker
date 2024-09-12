// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {dataList} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = dataList

  return (
    <li className="list-container">
      <div className="crypto-image-type">
        <img src={currencyLogo} className="crypto-image" alt={currencyName} />
        <p className="crypto-type-text">{currencyName}</p>
      </div>
      <div className="text-value">
        <p className="crypto-type-text usd-text">{usdValue}</p>
        <p className="crypto-type-text ero-type-text">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
