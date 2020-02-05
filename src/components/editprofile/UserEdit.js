import React from "react"
import { Form, Field, withFormik } from "formik"
import { Link } from "react-router-dom"
function UserEdit(){
    return(
        <div>
            <Form>
                <Field type="text" name="username" placeholder="Username..."/>
                <Field type="text" name="password" placeholder="Password..."/>
                <Field type="text" name="email" placeholder="Email..."/>
                <Field type="text" name="skills" placeholder="Skills..."/>
                <Field type="text" name="past_experience" placeholder="Past Experience..."/>
                <Field type="text" name="occupation" placeholder="Occupation..."/>
                <Field type="text" name="interests" placeholder="Interests..."/>
                <Field type="text" name="others" placeholder="Others..."/>
                <button type="submit">Edit</button>
            </Form>
            <Link to="/">Home</Link>
        </div>
    )
}

const FormikUserEdit = withFormik({
    mapPropsToValues() {
        return {
            username: "",
            password: "",
            email: "",
            skills: "",
            past_experience: "",
            occupation: "",
            interests: "",
            others: ""
        }
    },

    handleSubmit(values){
        console.log(values)
    }
})(UserEdit)



export default FormikUserEdit