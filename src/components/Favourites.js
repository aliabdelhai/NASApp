import { Component, useState, useEffect } from 'react';
import MediaCard from './MediaCard';
import axios from 'axios';

function Favourites(props) {
    const [favourites, setFavourites] = useState([])
    let id;
    if(props.match != undefined){
        id = props.match.params.id
    }

    const getTransactions = async () => {
        return axios.get(`/images?id=${id}`)
    }

    useEffect(async () => {
        const response = await getTransactions()
        setFavourites(response.data)
    }, [favourites])


    const removeFromFavourites = async (id) => {
        await axios.delete(`/image/${id}`)
        const index = favourites.findIndex(d => d._id === id)
        if (index !== -1) favourites.splice(index, 1);
    }



    return (
        <div>
            {favourites.map(f => <MediaCard favourite={f} removeFromFavourites={removeFromFavourites}/>)}
        </div>



    )
}

export default Favourites;
