import React from "react"
import { Form, Field, withFormik } from "formik"
import { Link } from "react-router-dom"
function CompanyProfile(){
    return(
        <div>
            <Form>
                <Field type="text" name="company" placeholder="Username..."/>
                <Field type="text" name="password" placeholder="Password..."/>
                <Field type="text" name="email" placeholder="Email..."/>
                <Field type="text" name="date_created" placeholder="Created in..."/>
                <Field type="text" name="employees" placeholder="Employees..."/>
                <Field type="text" name="benefits" placeholder="Benefits..."/>
                <Field type="text" name="others" placeholder="Others..."/>
                <button type="submit">Edit</button>
            </Form>
            <Link to="/">Home</Link>
        </div>
    )
}

const FormikCompanyProfile = withFormik({
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
<<<<<<< HEAD
=======

    handleSubmit(values){
        console.log(values)
    }
})(CompanyProfile)
>>>>>>> 598b8e78cd269fb27bac7bb6ad78a3f9473e40e7

    handleSubmit(values){
        console.log(values)
    }
})(CompanyProfile)

<<<<<<< HEAD
export default FormikCompanyProfile
=======

export default FormikCompanyProfile
>>>>>>> 598b8e78cd269fb27bac7bb6ad78a3f9473e40e7
