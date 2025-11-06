import {useState} from 'react';

function ScoutInput({ScoutNaming}) {

    const handleScoutName = (event) => {
        ScoutNaming.SetScoutName(event.target.value);
    };

    return (<>
    <p style={{
        position: "absolute",
        top: "30%",
        left: "5%"
    }}>Scout's Name:</p>
    <label htmlFor="text-input"></label>
    <input
    type="text"
    value={ScoutNaming.ScoutName}
    onChange={handleScoutName}
    placeholder="Scout's Name..."
    style={{
        position: "absolute",
        top: "40%",
        left: "5%",
        width: "87.5%",
        height: "5%",
    }}>
    </input>
    </>)
}

export default ScoutInput;