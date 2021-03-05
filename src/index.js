import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxReactFirebase, getFirebase, ReactReduxFirebaseProvider, reactReduxFirebase } from 'react-redux-firebase';
import {reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from './config/fbConfig';
import { BrowserRouter } from 'react-router-dom';



const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};


const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase , getFirestore })),
    reduxFirestore(fbConfig),
    
    )
    );

  
    
ReactDOM.render(
<React.StrictMode>
    <Provider store={store}>
     
        <BrowserRouter>
          <App />
        </BrowserRouter>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
