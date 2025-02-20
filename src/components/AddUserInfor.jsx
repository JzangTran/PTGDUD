import React, { useState } from "react";

const AddUserInfor = (props) => {
    const [nameInput, setNameInput] = useState('');
    const [ageInput, setAgeInput] = useState(0);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            name: nameInput,
            age: ageInput
        });
    }

    const handleNameInput = (event) => {
        setNameInput(event.target.value);
    }

    const handleAgeInput = (event) => {
        setAgeInput(event.target.value);
    }

    return(
        <div>
            <form action=""
                onSubmit={handleOnSubmit}>
                <div className="input-field">
                    <label htmlFor={nameInput}>Name:</label>
                    <input
                        id = {nameInput}
                        required
                        type="text" 
                        value={nameInput}
                        onChange={(event) => {handleNameInput(event)}}
                    />
                </div>
                <div  className="input-field">
                    <label htmlFor={ageInput}>Age:</label>
                    <input
                        id = {ageInput}
                        required
                        type="number" 
                        value={ageInput}
                        onChange={(event) => {handleAgeInput(event)}}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div>
                <span>Name: {nameInput}</span>
                <span>Age: {ageInput}</span>
             </div>
        </div>
    ); 
}

export default AddUserInfor;