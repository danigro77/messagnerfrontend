// Actions
const GET = 'conversations/GET';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case GET:
      // Perform action
      return state;
    default: return state;
  }
}

// Action Creators
export function get() {
  return { type: GET };
}
