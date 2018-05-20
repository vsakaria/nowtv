import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MessageList from "./MessageList";

import { getChatLog } from "./service";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.messages !== nextProps.messages) {
      this.setState({ messages: nextProps.messages });
    }
  }

  render() {
    return (
      <section>
        <h1>Messages</h1>
        <MessageList messages={this.state.messages} />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getChatLog }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
