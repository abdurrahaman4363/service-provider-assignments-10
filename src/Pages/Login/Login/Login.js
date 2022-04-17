import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const PasswordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>


    }
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSumit = event => {
        event.priventDefault();
        const email = emailRef.current.value;
        const Password = PasswordRef.current.value;
        console.log(email, Password);

        signInWithEmailAndPassword(email, Password)
    }
    const navigateRegister = event => {
        navigate('/register')
    }

   /*  const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Plsese enter your email address')
        }
    } */

   
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center my-3'>Please Login</h2>
            <Form onSubmit={handleSumit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control ref={PasswordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            
            <p>New to Gym? <Link to='/register' className='text-danger pe-auto text-decoration-none'>Please Register</Link></p>
            <p>Forget Password? <button  className='text-danger btn btn-link pe-auto text-decoration-none'>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            {/* onClick={resetPassword} */}
            
        </div>
    );
};

export default Login;