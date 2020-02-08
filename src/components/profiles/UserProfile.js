import React from "react"
import { userdata } from "../fakedata/data"
import { Link } from "react-router-dom"
import "./Profile.scss"
function UserProfile(){
    return(
        <div>
            
            {userdata.map(ele => 
            <div className="profile-display">
                <h2>User Profile</h2>
                Username:<div> {ele.name}</div>
                Password: <div>{ele.password}</div>
                Email: <div>{ele.email}</div>
                Skills: <div>{ele.skills}</div>
                Past Experiences: <div>{ele.past_experience}</div>
                Occupation: <div>{ele.occupation}</div>
                Interests: <div>{ele.interests}</div>
                Others: <div>{ele.others}</div>
                <Link to="/">
                    <button type="Submit">Back</button>
                </Link>
                <Link to="/user_edit">
                <button type="submit">Edit</button>
            </Link>
            </div>)}
            
        </div>
    )


}



export default UserProfile
