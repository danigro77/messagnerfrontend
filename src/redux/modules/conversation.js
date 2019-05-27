import { callAPI } from "../fetch";

// Action Types
const GET = 'conversation/GET';
const CREATE = 'conversation/CREATE';

// Reducer
export default function reducer(state = {}, action = {}) {
  const {type, conversation} = action;
  switch (type) {
    case GET:
      return Object.assign({}, state, conversation);
    case CREATE:
      const newState = Object.assign({}, state);
      newState.data.messages.push({
        body: action.message,
        uuid: Math.random().toString(36).substring(7),
        created_at: new Date(),
        direction: 'outgoing',
      });
      return newState;
    default: return state;
  }
}

// Action Creators
function get(conversation) {
  return { type: GET, conversation };
}
function create(message) {
  return { type: CREATE, message };
}

// API connections
export function getConversation(uuid) {
  const path = `/conversations/${uuid}`;
  return dispatch => callAPI(path)
    .then(data => {
      dispatch(get(data))
    })
    .catch(err => {
      console.log(err)
    })
}

export function addMessage(message) {
  return dispatch => dispatch(create(message))
}