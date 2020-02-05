import React, { useState, useEffect } from "react"
import axios from "axios"

import { Form, Field, withFormik } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"

import "./UserRegister.scss"

function UserRegister({errors, status }){
    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status]);

    return(
        <div className="user-register-container">
            Employee Register
            <Form className="form-user-register-container">
                {errors.username && <p>{errors.username}</p>}
                <Field className="field-user-register" type="text" name="username" placeholder="Username..."/>
                <Field className="field-user-register"type="text" name="password" placeholder="Password..."/>
                <Field className="field-user-register"type="text" name="email" placeholder="Email..."/>
                <label class="label-terms">
                    <Field className="field-user-submit-terms" type="checkbox" name="terms" />
                    <div className="terms">Terms and Conditions</div>
                </label>
                <button className="user-register-btn" type="submit">Register</button>
            </Form>
            <div>Already registered? <Link className="sign-in" to="/login">Sign in</Link></div>

            {user.map(ele => (
            <div>
                <div>{ele.username}</div>
                <div>{ele.password}</div>
                <div>{ele.email}</div>

            </div>
            ))}
            <Link className="back" to="/">{`${"<<"} Back`}</Link>

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
    validationSchema: Yup.object().shape({
        username: Yup.string()
        .min(6)
        .required("Please enter username."),
        password: Yup.string()
        .min(6)
        .required("Please enter password"),
        email: Yup.string()
        .required("Please enter email")
    }),

    handleSubmit(values, {setStatus, resetForm}){
        console.log(values)

        axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
            console.log("Success", res)
            setStatus(res.data);
            resetForm()
        })
        .catch(err => console.log(err))
    }
})(UserRegister)



export default FormikUserRegister