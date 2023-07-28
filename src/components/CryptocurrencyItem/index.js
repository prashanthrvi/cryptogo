import "./index.css"

const CryptocurrencyItem = (props) => {
  const { cryptoList } = props
  const { logo, name, usd, euro } = cryptoList
  return (
    <tr>
      <td className="name">
        {/* <div className="align"> */}
        <img src={logo} className="logo" alt={name} />
        {name}
        {/* </div> */}
      </td>
      <td className="currency-value">{usd}</td>
      <td className="currency-value">{euro}</td>
    </tr>
  )
}

export default CryptocurrencyItem
