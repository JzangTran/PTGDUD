import React from "react";

class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            ageInput: 0
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    handleNameInput = (event) => {
        this.setState({
            nameInput: event.target.value
        })
    }

    handleAgeInput = (event) => {
        this.setState({
            ageInput: event.target.value
        })
    }

    render() {
        return(
            <div>
                <form action=""
                    onSubmit={this.handleOnSubmit}>
                    <div className="input-field">
                        <label htmlFor={this.state.nameInput}>Name:</label>
                        <input
                            id = {this.setState.nameInput}
                            required
                            type="text" 
                            value={this.state.nameInput}
                            onChange={(event) => {this.handleNameInput(event)}}
                        />
                    </div>
                    <div  className="input-field">
                        <label htmlFor={this.state.ageInput}>Age:</label>
                        <input
                            id = {this.setState.ageInput}
                            required
                            type="number" 
                            value={this.state.ageInput}
                            onChange={(event) => {this.handleAgeInput(event)}}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div>
            	    <span>Name: {this.state.nameInput}</span>
                    <span>Age: {this.state.ageInput}</span>
         	    </div>
            </div>
        ); 
    }
}

export default Childcomponent;