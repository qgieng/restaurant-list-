import React from 'react';

const Result = ({search,location}) =>{
    const yelp_base = 'https://api.yelp.com/v3/businesses';
    const yelp_auth = process.env.YELP_API_KEY;

    const {searchField, setSearchField} = search;
    const {searchLocation,setSearchLocation} = location;
    
    return(
        <div>

        </div>
    )
}

export default Result