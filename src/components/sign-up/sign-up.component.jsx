import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import {useState} from "react";
import {connect} from "react-redux";

import './sign-up.styles.scss';
import {signUpStart} from "../../redux/user/user.actions";

const SignUp = ({signUpStart}) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        signUpStart({email, password, displayName});
    }

    const handleChange = e => {
        const {name, value} = e.target;

        setUserCredentials({...userCredentials, [name]: value})
    }

    return (
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Your Name'
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Your email'
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        handleChange={handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        handleChange={handleChange}
                        required
                    />

                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);