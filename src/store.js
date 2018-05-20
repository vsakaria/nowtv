import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

export function reducer(state = {}, action = {}) {
  switch (action.type) {
    case "MESSAGES_LOADING_FULFILLED":
      return Object.assign({}, state, {
        messages: action.payload
      });
    case "MEMBERS_LOADING_FULFILLED":
      return Object.assign({}, state, {
        members: action.payload
      });
    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promiseMiddleware())
);

export const getEnrichedMessages = state => {
  if (state.messages && state.members) {
    return state.messages.map(message => {
      const foundMember = state.members.find(
        member => member.id === message.userId
      );
      return {
        body: message.message,
        avatar: foundMember.avatar,
        email: foundMember.email,
        timeStamp: message.timestamp,
        id: message.id
      };
    });
  }
};
