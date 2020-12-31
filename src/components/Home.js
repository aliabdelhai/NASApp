import { Component } from 'react';
import MediaCard from '../components/MediaCard';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom'


function Home(props) {


    return (
        <div className="home">
            <MediaCard response={props.data}  />
        </div>
    )
}


export default Home;
