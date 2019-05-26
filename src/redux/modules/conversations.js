import { callAPI } from "../fetch";
// Action Types
const GET = 'conversations/GET';

// Reducer
export default function reducer(state = {}, action = {}) {
  const {type, conversations} = action;
  switch (type) {
    case GET:
      return Object.assign({}, state, conversations);
    default: return state;
  }
}

// Action Creators
function get(conversations) {
  return { type: GET, conversations };
}

// API connections
export function getConversations(page=0) {
  const path = '/conversations';

  return dispatch => callAPI(path, 'GET', { page })
    .then(data => {
      dispatch(get(data))
    })
    .catch(err => {
      console.log(err)
    })
}
