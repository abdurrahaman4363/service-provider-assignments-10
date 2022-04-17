import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {

    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login')
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
      
 
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName:name });
          navigate('/home')

    }


    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form action="" onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='your name' />

                <input type="email" name="email" id="" placeholder='Email address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                
                <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">Accept Gym Condition</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary'
                    type="submit"
                    value="Register" />

            </form>
            <p>Alreday have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;