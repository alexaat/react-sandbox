import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";

const SignIn = ({onSubmit}) => {

    const navigate = useNavigate();

    const user = useUser();
    if(user){
        navigate('/');
    }

    const initialValues = {
            email: '',
            password: ''
    }

    const validate = values => {
        const errors = {};
        if(!values.email){
            errors.email = 'Required'
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = 'Invalid email format'
        }

        if(!values.password){
            errors.password = 'Required'
        }
        return errors;
    }   
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate        
    });

    return (
        <>
        <form onSubmit={formik.handleSubmit}>
           
           <div className="input-container">
           
            <input
                type='email'
                name='email'
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
            </div>
            <div className="input-container">
            <input
                type='password'
                name='password'
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
            </div>
            <input type='submit' value='Submit'/>            
        </form>
        <div className="link"><a href='/signup'>Create Account</a></div>
        </>
    );
}

export default SignIn;