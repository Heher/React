export default function drafts(state = [], action) {
  const { id, payload } = action

  switch (action.type) {
    case 'RECEIVE_DRAFTS' : {
      return Object.assign([], state, action.drafts)
    }

    case 'ADD_DRAFT' : {
      return [
        ...state,
        ...action.json
      ]
    }

    default: {
      return state
    }
  }
}