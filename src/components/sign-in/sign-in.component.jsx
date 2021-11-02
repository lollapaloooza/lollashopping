import {useState} from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {useDispatch} from "react-redux";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

import './sign-in.styles.scss';

const SignIn = () =>  {
    const dispatch = useDispatch();
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});

    const {email, password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

        dispatch(emailSignInStart({email, password}));
    }

   const handleChange = e => {
        const {name, value} = e.target;

        setUserCredentials({...userCredentials, [name]: value})
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    handleChange={handleChange}
                    required/>

                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                    required/>

                <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton
                        type='button'
                        onClick={()=>dispatch(googleSignInStart())}
                        isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
            </form>

        </div>
    )
}

export default SignIn;