import React from 'react'

import PanelButtons from '../panel/PanelButtons'
import EditItem from '../panel/buttons/EditItem'

export default class UserPanelInfo extends React.Component {
  render() {
    const { user, users } = this.props

    return (
      <div className="user">
        <div className="title">
          <h5>{user.name}</h5>
          <EditItem {...this.props} item={user} type="User" />
        </div>
        <p>Draft Number: {user.draftNum}</p>
        <button onClick={this.props.signInAsUser.bind(this, users, user.id_token)}>Sign in as {user.name}</button>
      </div>
    )
  }
}