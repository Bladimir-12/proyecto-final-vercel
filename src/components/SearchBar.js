import Axios from 'axios';
import React, { Fragment, useState } from 'react'
import Celebrities_List from './Celebrities_List';
import Home from '../pages/Home'
import '../App.css';

const SearchBar = () => {

    const [celData, setCelData] = useState();
    const [celebrity, setCelebrity] = useState();

    function handleChange(e) {
        e.preventDefault();
        setCelebrity(e.target.value);
    }

    function getCelData() {
        const key = process.env.REACT_APP_KEY;
        const headers = { 'X-Api-Key': key }
        const url = `${process.env.REACT_APP_URL_NAME}=${celebrity}`;
        Axios.get(url, { headers })
            .then(res => {
                setCelData(res.data);
            })
            .catch(err => { console.log(err) });
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row ">
                    <div className="col d-flex justify-content-center">
                        <nav class="navbar-search">
                            <div className=" bg-dark">
                                <input type="text" onChange={handleChange}></input>
                                <button className="search-btn" onClick={getCelData}>Buscar</button>
                            </div>
                        </nav>
                    </div>
                </div>
                {celData ? (<Celebrities_List celebrities={celData} />) : (<Home />)}
            </div>
        </Fragment>
    )
}

export default SearchBar
