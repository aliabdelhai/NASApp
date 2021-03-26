import { Component, useState, useEffect } from 'react';
import MediaCard from './MediaCard';
import axios from 'axios';

function Favourite(props) {
    const [favourite, setFavourites] = useState([])
    let id;
    if (props.match != undefined) {
        id = props.match.params.id
    }

    const getTransactions = async () => {
        return axios.get(`/api/images?id=${id}`)
    }

    useEffect(async () => {
        const response = await getTransactions()
        const temparr = response.data.find(d => d._id == id)
        setFavourites(temparr)
        console.log(favourite)
    }, [favourite])


    const removeFromFavourites = async (id) => {
        await axios.delete(`/api/image/${id}`)
        const index = favourite.findIndex(d => d._id === id)
        if (index !== -1) favourite.splice(index, 1);
    }



    return (
        <div>
             {favourite != undefined ?
            <div className="favouriteImg">
                <div className="subTitle">{favourite.title}</div>
                <div className="searchfavImg"><img width="420" height="315" src={favourite.imgUrl}></img></div>
                <div className="desc">{favourite.description}</div>
                <i class="fas fa-thumbs-down" id="dislikes" onClick={removeFromFavourites}></i>
                </div> : null}

       
        </div>



    )
}

export default Favourite;
