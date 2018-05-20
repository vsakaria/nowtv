import React from "react";
import PropTypes from "prop-types";

const MessageList = ({ messages }) => {
  return (
    <section>
      <ul>
        {messages.map(message => <li key={message.id}>{message.message}</li>)}
      </ul>
    </section>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageList;
