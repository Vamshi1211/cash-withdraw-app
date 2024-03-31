// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominations, withdrawDenominations} = props
  const {id, value} = denominations

  const onButtonClick = () => {
    withdrawDenominations(id, value)
  }

  return (
    <li className="list">
      <button
        type="button"
        className="denomination-button"
        onClick={onButtonClick}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
