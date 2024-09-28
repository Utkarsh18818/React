import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user,setuser] = React.useState(null)
    return(
        
        <UserContextprovider value={{user,setuser}}>
        {children}
        </UserContextprovider>
        
    )

}

export default UserContextProvider