import React, {useState} from 'react'

const Form = ({ state,setState,location, setLocationState}) =>{

    const handleValueChange = (e)=>{
        setState(e.target.value);
    }
    const handleLocationChange = (e)=>{
        setLocationState(e.target.value);
    }
    return(
        <div>
            <form>
                <p>Search query</p>
                <input 
                    value = {state}
                    onChange={handleValueChange}/>
                <p>Location</p>
                <input 
                    value = {location}
                    onChange={handleLocationChange}/>
            </form>
        </div>
    )
}

export default Form