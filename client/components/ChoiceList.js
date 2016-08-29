import React from 'react'

import ChoiceRound from './ChoiceRound'

require('../css/choice_list.sass')

export default class ChoiceList extends React.Component {

  render() {
    const rounds = this.props.settings.round

    const draftedCountries = this.props.countries.filter(country => {
      return country.drafted
    })

    const renderCountries = []

    for (let i = 1; i <= rounds; i++) {
      renderCountries[i] = draftedCountries.filter(country => {
        return country.round === i
      })
    }

    const renderRounds = []
    renderCountries.forEach((round, index) => {
      renderRounds.push(<ChoiceRound {...this.props} key={index} i={index} round={round} roundNumber={index} />)
    })

    return (
      <div className="choice-list">
        <h2>Drafted Countries</h2>
        {renderRounds}
      </div>
    )
  }

}
