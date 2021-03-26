import { Component } from 'react';
import Home from '../components/Home';
import Search from '../components/Search';
import Favourites from '../components/Favourites';
import Favourite from '../components/Favourite';

import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom'
import MediaCard from './MediaCard';


function Container(props){
        return (
            <div className="container">
                <Route path="/" exact render={() => <Home data={props.data}/>} />
                <Route path="/search" exact render={() => <Search  />} />
                <Route path="/favourites" exact render={() => <Favourites  />} />
                <Route path='/favourite/:id' exact render={({ match }) => <Favourite  match={match}/>} />
            </div>
        )
}


export default Container;
