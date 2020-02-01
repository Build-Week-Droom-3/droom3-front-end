import React from "react"
import { Form, Field, withFormik } from "formik"
import { Link } from "react-router-dom"

const Login = () => {
    return(
        <div>
            <Form>
                <Field type="text" name="username" placeholder="Username..."/>
                <Field type="text" name="password" placeholder="Password..."/>
                <button type="submit">Login</button>
            </Form>
            <Link to="/">Home</Link>
        </div>
    )
}

const FormikLogin = withFormik({
    mapPropsToValues() {
        return {
            username: "",
            password: ""
        };
    },
})(Login);


export default FormikLogin