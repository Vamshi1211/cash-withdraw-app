// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {initialAmount: 2000}

  getDenominations = (uniqueId, value) => {
    this.setState(prevState => ({
      initialAmount: prevState.initialAmount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {initialAmount} = this.state

    return (
      <div className="cash-withdrawal-container">
        <div className="app-container">
          <div className="logo-name-container">
            <p className="logo">S</p>
            <h1 className="name">Vamshi Gundepangu</h1>
          </div>
          <div className="your-balance-container">
            <p className="your-balance-heading">Your Balance</p>
            <div className="balance-container">
              <p className="balance">{initialAmount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose">Choose Sum (in Rupees)</p>
          <ul className="list-of-amount-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominations={eachItem}
                key={eachItem.id}
                withdrawDenominations={this.getDenominations}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
