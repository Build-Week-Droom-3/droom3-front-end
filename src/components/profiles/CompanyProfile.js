import React from "react"
import { companydata } from "../fakedata/data"
import { Link } from "react-router-dom"
import "./Profile.scss"
function CompanyProfile(){
    return(
        <div>
            
            {companydata.map(ele => 
            <div className="profile-display">
                <h2>Company Profile</h2>
                Company:<div> {ele.company}</div>
                Password: <div>{ele.password}</div>
                Email: <div>{ele.email}</div>
                Date Created: <div>{ele.date_created}</div>
                Employees: <div>{ele.employees}</div>
                Benefits: <div>{ele.benefits}</div>
                Others: <div>{ele.others}</div>
                <Link to="/">
                    <button type="Submit">Back</button>
                </Link>
                <Link to="/company_edit">
                <button type="submit">Edit</button>
            </Link>
            </div>)}
            
        </div>
    )


}



export default CompanyProfile
