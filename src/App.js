import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Toolbar from './components/Toolbar';
import HackList from './components/HackList';
import axios from 'axios'


class App extends React.Component {

  state={
    hacks:[]
  }

  componentDidMount(){
    axios.get('http://hn.algolia.com/api/v1/search?tags=front_page').then(res=>{
        const hackdata= res.data.hits;
        console.log(hackdata)
        this.setState(()=>{
          return {hacks: hackdata}
        })
    })
  }

  render(){
    return (
      <React.Fragment>
        <Toolbar/>
        <HackList data={this.state.hacks}/>
      </React.Fragment>
    );
  }
}

export default App;
