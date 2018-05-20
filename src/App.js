import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MessageList from "./MessageList";

import { getChatLog } from "./service";
import { getEnrichedMessages } from "./store";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      enrichedMessages: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.enrichedMessages !== nextProps.enrichedMessages) {
      this.setState({ enrichedMessages: nextProps.enrichedMessages });
    }
  }

  render() {
    return (
      <section>
        <h1>Messages</h1>
        <MessageList messages={this.state.enrichedMessages} />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    enrichedMessages: getEnrichedMessages(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getChatLog }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
