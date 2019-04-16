import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test"
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }

  render() {
    console.log("render");
    return <h1>Test</h1>;
  }
}

export default Test;
