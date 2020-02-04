import React from "react"
import { Form, Field, withFormik } from "formik"
import { Link } from "react-router-dom"
function CompanyRegister(){
    return(
        <div> 
           <Link to="/">Home</Link>
            <Form>
                <Field type="text" name="company" placeholder="Company..."/>
                <Field type="text" name="password" placeholder="Password..."/>
                <Field type="text" name="email" placeholder="Email..."/>
                <label>
                    Terms and Conditions
                <Field type="checkbox" name="terms" />
                </label>
                <button type="submit">Register</button>
            </Form>
            <div>Already registered? <Link to="/login">Sign in.</Link></div>
        </div>
    )
}

const FormikCompanyRegister = withFormik({
    mapPropsToValues() {
        return {
            company: "",
            password: "",
            email: "",
            terms: false
        }
    },

    handleSubmit(values){
        console.log(values)
    }
})(CompanyRegister)



export default FormikCompanyRegister