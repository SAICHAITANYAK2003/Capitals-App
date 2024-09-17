import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activecountryid: countryAndCapitalsList[0].id,
  }
  onChangeCountry = event => {
    this.setState({activecountryid: event.target.value})
  }
  getCountry = () => {
    const {activecountryid} = this.state

    const activecountryandcapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activecountryid,
    )
    return activecountryandcapital.country
  }
  render() {
    const {activecountryid} = this.state

    const country = this.getCountry(activecountryid)

    return (
      <div className="main-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <div className="country-selector">
            <select
              className="capital-select form-control"
              onChange={this.onChangeCountry}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  key={eachCountry.id}
                  value={eachCountry.id}
                  className="option "
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="text">is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
