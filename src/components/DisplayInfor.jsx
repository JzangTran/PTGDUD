import React from "react";

class DisplayInfo extends React.Component {
    constructor(props) {
        super();
        this.props = props
    }

    render() {
        const {listUser} = this.props;

        console.log(listUser);
        return (
            <div className="list-info">
                {listUser.map((user) => {
                    return (
                        <div
                            key={user.id}
                            className={user.age < 18? "red" : "blue"}
                        >
                            <div>My name: {user.name}</div>
                            <div>My age: {user.age}</div>
                            <button onClick={() => {
                                this.props.handleDeleteUser(user.id)
                            }}>Delete</button>
                        </div>
                    );
                })}
            </div>
        );
    }

}

export default DisplayInfo;