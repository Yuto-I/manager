import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';


const configureStore = () => {
  return createStore(reducers, {}, applyMiddleware(ReduxThunk));
}

class App extends Component {
  state = {
    store: configureStore()
  };

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBYxOQlhC4XC4s1STnmpgPLA3CAb5SGsfk",
      authDomain: "manager-c0285.firebaseapp.com",
      databaseURL: "https://manager-c0285.firebaseio.com",
      projectId: "manager-c0285",
      storageBucket: "",
      messagingSenderId: "171125304297"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
