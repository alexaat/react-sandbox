import { useFormik } from "formik";

const SignUp = ({ onSubmit }) => {
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    const validate = values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required'
        }

        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format'
        }

        if (!values.password) {
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
        <form onSubmit={formik.handleSubmit}>

            <div className="input-container">
                <input
                    type='text'
                    name='name'
                    placeholder="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
            </div>


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

            <input type='submit' value='Submit' />
        </form>
    );
}

export default SignUp;