import { Component, useState, useEffect, useLocation } from 'react';
import '../styles/search.css';
import axios from 'axios';
import MediaCard from './MediaCard';

function Search() { 

    const [input, setInput] = useState("")
    const [data, setData] = useState([])


    const saveToFavourites = (img) => {
        save(img)
    }

    const save = async (img) => {
        const response = await axios.post('/image', img)
    }


    const search = async () => {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${input}`)
        setData(response.data.collection.items)
    }

    return (
        <div>
            <div id="search">
                <input type="text" value={input} placeholder="search..." onChange={e => setInput(e.target.value)} />
                <div id="button" onClick={search}>SEARCH</div>
            </div>
            {data.map(d => <MediaCard data={d} saveToFavourites={saveToFavourites} />)}

        </div>


    )
}

export default Search;
