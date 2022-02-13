//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
//import Counter from './components/Counter';
//import Hello from './components/HookUp';
//import Converter from './components/Converter';
//import MyList from './components/List';

function App() {
    //const arr = ['N', 'X', 'T'];
    return ( 
      // <Hello />
      // <Converter />
      // <MyList data = {arr}/>
      <div className="App">
        <Header />
        <TinderCards />
        <SwipeButtons />
      </div>
    );
  }

export default App;