import React, {useContext} from "react";
import UserContext from "../Context/UserContext"
function profile(){
    const {user} = useContext(UserContext);
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
    return(
        <div></div>
    )
}

export default profile