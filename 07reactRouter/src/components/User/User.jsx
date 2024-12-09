import React from "react"
import { useParams } from "react-router-dom"
function User(){
    const {userid}=useParams()   // useParams Returns objects and we have done destructoring of object.
    return(
        <div className="bg-gray-800 text-white text-3xl py-4">User: {userid}</div>
    )
}
export default User