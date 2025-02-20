import React, {useState} from "react";
import DisplayInfo from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

const Mycomponent = (props) => {
    const [listUser, setListUser] = useState(
        [
            {id: 1, name: "Dung", age: 49},
            {id: 2, name: "Hoang", age: 17},
            {id: 3, name: "Chien", age: 32},
        ]
    );

    const handleAddnewUser = (userObject) => {
        setListUser([userObject, ...listUser]);
    }

    const handleDeleteUser = (userID) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id!== userID)
        setListUser(listUserClone);
    }

    return (
        <div>
            <AddUserInfor handleAddnewUser={handleAddnewUser}/>
            <hr/>
            <DisplayInfo 
                listUser = {listUser}
                handleDeleteUser={handleDeleteUser}
            ></DisplayInfo>
        </div>
    );
}


export default Mycomponent;