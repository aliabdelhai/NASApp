import './App.css';
import { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios';
import NavBar from './components/NavBar';
import Container from './components/Container';



function App() {
  const [data, setData] = useState([])


  useEffect(async () =>{
    const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=qjTIdphy4kyWhH3hrdTiJ2OyWWjLJqk6RBLOQchQ")
    setData(response.data)
  }, [])



  return (
    <Router>
      <div id="home-background"></div>
      <div className="App">
        <NavBar />
        <Container data={data}/>
      </div>


    </Router>
  );
}

export default App;
