import React, {useState} from 'react'

const Form = ({ search,location}) =>{
    const {searchField, setSearchField} = search
    const {searchLocation,setSearchLocation} = location;

    const handleValueChange = (e)=>{
        setSearchField(e.target.value);
    }
    const handleLocationChange = (e)=>{
        setSearchLocation(e.target.value); 
    }
    return(
        <div>
            <form>
                <p>Search query</p>
                <input 
                    value = {searchField}
                    onChange={handleValueChange}/>
                <p>Location</p>
                <input 
                    value = {searchLocation}
                    onChange={handleLocationChange}/>
            </form>
        </div>
    )
}

export default Form