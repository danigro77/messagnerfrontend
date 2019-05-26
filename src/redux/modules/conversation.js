const apiPath = 'https://sec.meetkaruna.com/api/v1';

// Action Types
const GET = 'conversation/GET';

// Reducer
export default function reducer(state = {}, action = {}) {
  const {type, conversation} = action;
  switch (type) {
    case GET:
      return Object.assign({}, state, conversation);
    default: return state;
  }
}

// Action Creators
export function get(conversation) {
  return { type: GET, conversation };
}

// API connections
export function getConversation(uuid) {
  return dispatch => fetch(`${apiPath}/conversations/${uuid}`)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      dispatch(get(data))
    })
    .catch(err => {
      console.log(err)
    })
}