import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";
import "firebase/storage"
import "firebase/functions"
import "firebase/messaging"
import "firebase/database"

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
    var config = {
      apiKey: 'AIzaSyCgJOEsq12RhD9EOBBnR1VSZNSvCW1Sdtg',
      authDomain: 'spacecraft-22dc1.firebaseapp.com',
      databaseURL: 'https://spacecraft-22dc1.firebaseio.com',
      projectId: 'spacecraft-22dc1',
      storageBucket: 'spacecraft-22dc1.appspot.com',
      messagingSenderId: '28459008283',
      // appId: "1:28459008283:web:809f4571433c65f9",
      // measurementId: "G-83LV95LTW7"
      appId: "1:28459008283:web:e9305848b03479a1",
      measurementId: "G-WZ12BEX6RG",
    };
    firebase.initializeApp(config);
    const perf = firebase.performance();
    const trace = perf.trace('customTraceName');
    trace.start();

    // code that you want to trace

    trace.stop();
    var storageRef = firebase.storage().ref();
    console.log(storageRef)
    var image = storageRef.child('WechatIMG168.jpeg')
    console.log(image.parent + image.name)

    var firestoreRef = firebase.firestore().collection('users').doc('QMqoTvCUnT1Ve2Jek5fL');
    console.log(firestoreRef)

    var auth = firebase.auth()

    var functions = firebase.functions()

  }

  render() {
    return (
      <div className="home-app">
        <div className="page-container">{this.props.children}</div>
      </div>
    );
  }
}
