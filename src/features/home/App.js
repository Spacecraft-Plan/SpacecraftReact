import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as firebase from "firebase/app";

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  componentWillMount() {
    // Initialize Firebase
    // var firebase = require('firebase/app');
    var config = {
      apiKey: 'AIzaSyCgJOEsq12RhD9EOBBnR1VSZNSvCW1Sdtg',
      authDomain: 'spacecraft-22dc1.firebaseapp.com',
      databaseURL: 'https://spacecraft-22dc1.firebaseio.com',
      projectId: 'spacecraft-22dc1',
      storageBucket: 'spacecraft-22dc1.appspot.com',
      messagingSenderId: '28459008283',
    };
    firebase.initializeApp(config);
    const perf = firebase.performance();
    const trace = perf.trace('customTraceName');
    trace.start();

    // code that you want to trace

    trace.stop();
  }

  render() {
    return (
      <div className="home-app">
        <div className="page-container">{this.props.children}</div>
      </div>
    );
  }
}
