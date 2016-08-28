import React from 'react'

import Flag from './Flag'

require('../css/country_item.sass')

export default class CountryItem extends React.Component {

  render() {
    const { round } = this.props

    const foundCountry = this.props.countries.find(country => {
      return ((country.userId === this.props.currentUser._id) && (country.round === round) && country.drafted)
    })

    if (foundCountry) {
      const countryRegion = this.props.regions.find(region => {
        return region._id === foundCountry.regionId
      })

      return (
        <li className="country-item">
          <div className="round-wrapper">
            <span className="round">{round}</span>
            <Flag country={foundCountry} />
            <div className="country-wrapper">
              <span className="country">{foundCountry.name}</span>
              <span className="region">{countryRegion.name}</span>
            </div>
          </div>
        </li>
      )
    }

    return (
      <li className="country-item">
        <div className="round-wrapper">
          <span className="round">{round}</span>
        </div>
      </li>
    )
  }
}
