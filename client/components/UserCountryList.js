import React from "react";

import UserCountryItem from './UserCountryItem'

require('../css/country_list.sass')

export default class UserCountryList extends React.Component {

  render() {
    const { user } = this.props

    const countries = this.props.countries.map((country, index) => {
      if ((country.userId === user._id) && country.drafted) {
        return <UserCountryItem {...this.props} key={index} i={index} country={country} />
      }
    })

    countries.sort(function(a, b) {
      return a.props.country.round - b.props.country.round
    })

    return (
      <div className="user-country-list">
        <ul>
          {countries}
        </ul>
      </div>
    )
  }
}