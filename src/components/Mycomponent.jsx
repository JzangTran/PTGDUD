import React from "react";
import DisplayInfo from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";


class Mycomponent extends React.Component {
    constructor() {
        super();
        this.state = {
            listUser: [
                {id: 1, name: "Dung", age: 49},
                {id: 2, name: "Hoang", age: 17},
                {id: 3, name: "Chien", age: 32},
            ]
        };
    }

    handleAddnewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })
        console.log(this.state.listUser);
    }

    render() {

        return (
            <div>
                <AddUserInfor handleAddnewUser={this.handleAddnewUser}></AddUserInfor>
                <hr></hr>
                <DisplayInfo 
                    listUser = {this.state.listUser}
                ></DisplayInfo>
            </div>
        );
    }
}

export default Mycomponent;