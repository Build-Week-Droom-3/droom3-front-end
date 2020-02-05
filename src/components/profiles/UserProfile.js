import React from "react"
import { Form, Field, withFormik } from "formik"
import { Link } from "react-router-dom"
import { data } from "../fakedata/data"
function UserProfile(){
    return(
        <div>
            {data.map(ele => 
            <div>
                <div>{ele.name}</div>
                <div>{ele.password}</div>
                <div>{ele.email}</div>
                <div>{ele.skills}</div>
                <div>{ele.past_experience}</div>
                <div>{ele.occupation}</div>
                <div>{ele.interests}</div>

            </div>)}
        </div>
    )


}



export default UserProfile
