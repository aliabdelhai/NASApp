
import { useState } from 'react';
import '../styles//mediaCard.css';
import Favourites from './Favourites';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom'

function MediaCard(props) {

    const saveToFavourites = () => {
        let img = { title: props.data.data[0].title, imgUrl: props.data.links[0].href, description: props.data.data[0].description }
        props.saveToFavourites(img)
    }

    const removeFromFavourites = () => {
        props.removeFromFavourites(props.favourite._id)

    }

    return (
        <div className="MediaCard">

            <div id="popup1" class="overlay">
                <div class="popup">
                    <a class="close" href="#">&times;</a>
                    <div class="content">
                        ITEM SAVED
		                </div>
                </div>
            </div>


            {props.response != undefined ?
                <div className="homePage">
                    <div className="title">{props.response.title}</div>
                    <div className="homeImg"><iframe width="820" height="515" src={props.response.url}></iframe></div>
                    <div className="desc">{props.response.explanation}</div>
                </div>
                : null}

            {props.data != undefined ?
                <div className="search">
                    <div className="subTitle">{props.data.data[0].title}</div>
                    <div className="searchImg"><img width="420" height="315" src={props.data.links[0].href}></img></div>
                    <a class="button" href="#popup1"><i class="fas fa-thumbs-up" id="likes" onClick={saveToFavourites}></i></a>
                </div> : null}


            {props.favourite != undefined ?
                <div className="favouriteImg">
                    <div className="subTitle">{props.favourite.title}</div>
                    <Link to={`/favourite/${props.favourite._id}`}>
                        <div className="searchfavImg"><img width="420" height="315" src={props.favourite.imgUrl}></img></div>
                    </Link>
                    <div className="desc">{props.favourite.description}</div>
                    <i class="fas fa-thumbs-down" id="dislikes" onClick={removeFromFavourites}></i>


                </div> : null}


        </div>
    )
}

export default MediaCard;
