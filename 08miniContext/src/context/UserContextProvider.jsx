import React from "react";
import UserContext from "./UserContext";


// {children} is list of all the components that have access to variables of UserContext. 
// So we will pass it as it is.
const UserContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null)
    return (
        // value ={}  now this will have object { Pass as many variables,data etc you want to}
        <UserContext.Provider  value={{user, setUser}}>  
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider