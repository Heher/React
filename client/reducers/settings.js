function settings(state = [], action) {
  const { lastOfRound, round } = action

  switch(action.type) {
    case 'RECEIVE_SETTINGS' :
      return Object.assign({}, state, action.settings[0])

    case 'DRAFT_COUNTRY' :
      if (lastOfRound) {
        return {
          ...state,
          round: state.round + 1,
          numberDrafted: 0
        }
      }
      if (round % 2 === 0) {
        return {
          ...state,
          userTurn: state.userTurn - 1,
          numberDrafted: state.numberDrafted + 1
        }
      }
      return {
        ...state,
        userTurn: state.userTurn + 1,
        numberDrafted: state.numberDrafted + 1
      }

    case 'TOGGLE_EDIT_USER' :
      return {
        ...state,
        editingDraftOrder: !state.editingDraftOrder
      }

    case 'SAVED_DRAFT' :
      return {
        ...state,
        editingDraftOrder: false
      }

    default:
      return state
  }
}

export default settings