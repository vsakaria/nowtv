import { getMessages, getMembers } from "./data";

export function getChatLog() {
  return {
    type: "MESSAGES_LOADING",
    payload: getMessages()
  };
}

export function getMembersData() {
  return {
    type: "MEMBERS_LOADING",
    payload: getMembers()
  };
}
