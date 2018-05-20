import React from "react";
import PropTypes from "prop-types";

import ListImage from "./ListImage";

const MessageList = ({ messages }) => {
  return (
    <section>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <ListImage avatar={message.avatar} placeholderSize="100" />
            {message.body}
          </li>
        ))}
      </ul>
    </section>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageList;
