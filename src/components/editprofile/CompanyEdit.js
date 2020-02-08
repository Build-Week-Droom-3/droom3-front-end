import React from "react"
import { Form, Field, withFormik } from "formik"
import { Link } from "react-router-dom"
import "./Edit.scss"
function CompanyEdit(){
    return(
        <div>
            <h2>Company Edit</h2>
            <Form>
                <Field type="text" name="company" placeholder="Company..."/>
                <Field type="text" name="password" placeholder="Password..."/>
                <Field type="text" name="email" placeholder="Email..."/>
                <Field type="text" name="date_created" placeholder="Created in..."/>
                <Field type="text" name="employees" placeholder="Employees..."/>
                <Field type="text" name="benefits" placeholder="Benefits..."/>
                <Field type="text" name="others" placeholder="Others..."/>
                <button type="submit">Save</button>
                <Link to="/company_profile"><button>Back</button></Link>

            </Form>
        </div>
    )
}

const FormikCompanyEdit = withFormik({
    mapPropsToValues() {
        return {
            company: "",
            password: "",
            email: "",
            date_created: "",
            employees: "",
            benefits: "",
            others: ""
        }
    },

    handleSubmit(values){
        console.log(values)
    }
})(CompanyEdit)



export default FormikCompanyEdit