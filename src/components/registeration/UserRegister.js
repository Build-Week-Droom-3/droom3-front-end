import React from "react"
import { Form, Field, withFormik } from "formik"
import { Link } from "react-router-dom"
function UserRegister(){
    return(
        <div>
            <Form>
                <Field type="text" name="username" placeholder="Username..."/>
                <Field type="text" name="password" placeholder="Password..."/>
                <Field type="text" name="email" placeholder="Email..."/>
                <label>
                    Terms and Conditions
                <Field type="checkbox" name="terms" />
                </label>
                <button type="submit">Register</button>
            </Form>
            <Link to="/">Home</Link>
        </div>
    )
}

const FormikUserRegister = withFormik({
    mapPropsToValues() {
        return {
            username: "",
            password: "",
            email: "",
            terms: false
        }
    },

    handleSubmit(values){
        console.log(values)
    }
})(UserRegister)



export default FormikUserRegister