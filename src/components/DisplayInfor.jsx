import React, {useState, useEffect} from "react";

const DisplayInfo = (props) => {
    const {listUser} = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    useEffect(
        () => {
            if (listUser.length === 0)
                alert("You deleted all users")
            console.log("call useeffect");
        }, 
        [listUser]
    );


    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    
    console.log('re-render');
    
    return (
        <div>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true? "Hide list User":"Show list User"}
                </span>
            </div>

            <div style={{display:isShowHideListUser?'block':'none'}} className="list-info">
                {listUser.map((user) => {
                    return (
                        <div
                            key={user.id}
                            className={user.age < 18? "red" : "blue"}
                        >
                            <div>My name: {user.name}</div>
                            <div>My age: {user.age}</div>
                            <button onClick={() => {
                                props.handleDeleteUser(user.id)
                            }}>Delete</button>
                        </div>
                    );
            })}
        </div>
        </div>
        
        
    );
}

export default DisplayInfo;