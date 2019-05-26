const apiPath = 'https://sec.meetkaruna.com/api/v1';

// Action Types
const GET = 'conversations/GET';
const GET_LIST = 'conversations/GET_LIST';

// Reducer
export default function reducer(state = {}, action = {}) {
  const {type, ...data} = action;
  switch (type) {
    case GET:
    case GET_LIST:
      return Object.assign({}, state, data);
    default: return state;
  }
}

// Action Creators
export function getOne(conversation) {
  return { type: GET, conversation };
}
export function getList(conversations) {
  return { type: GET_LIST, conversations };
}

// API connections

export function getConversations () {
  return dispatch => fetch(`${apiPath}/conversations`)
    .then(resp => dispatch(getList(resp)))
}
export function getConversation (uuid) {
  return dispatch => fetch(`${apiPath}/conversations/${uuid}`)
    .then(resp => dispatch(getOne(resp)))
}