import React from 'react'
import classNames from 'classnames'

import avatar from './Avatar'
import Flag from './Flag'
import ChoiceSubmit from './ChoiceSubmit'

require('../css/country.sass')

export default class CountryCard extends React.Component {
  userOwnsCountry(countryUserId, currentUserId) {
    return countryUserId === currentUserId
  }

  handleClick(canDraft, canBeDeselected, canBeSelected) {
    if (!canDraft) {
      return null
    }
    if (canBeDeselected) {
      this.deselect(this.props.region._id, this.props.country._id, this.props.currentUser._id)
    } else if (canBeSelected) {
      this.select(this.props.region._id, this.props.country._id, this.props.currentUser._id)
    }
  }

  select(region, country, user) {
    this.props.selectCountry(region, country, user)
  }

  deselect(region, country, user) {
    this.props.deselectCountry(region, country, user)
  }

  render() {
    const { name, shortName, userId, selected, drafted } = this.props.country
    const { canDraft, regionCompleted } = this.props
    const currentUserId = this.props.currentUser._id

    const renderClasses = classNames({
      owned: (currentUserId === userId) && drafted,
      taken: (currentUserId !== userId) && drafted,
      disabled: (currentUserId !== userId) && !selected && regionCompleted,
      selected: (currentUserId === userId) && selected,
      waitingTurn: !canDraft
    })

    const canBeSelected = !userId && !regionCompleted
    const canBeDeselected = (currentUserId === userId) && selected

    const needsAvatar = (currentUserId !== userId) && drafted


    return (
      <div>
        <div
          className={`countryCard ${renderClasses}`}
          onClick={this.handleClick.bind(this, canDraft, canBeDeselected, canBeSelected)}
        >
          <div className="country-card-info">
            <Flag country={this.props.country} />
            <p>
              {selected ? shortName : name}
              {needsAvatar ? avatar(this.props.users, userId) : null}
            </p>
          </div>
          <ChoiceSubmit {...this.props} selectedCountry={this.props.country} />
        </div>
      </div>
    )
  }
}
