import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FormInput } from '../reusable/FormInput';
import { Button } from '../reusable/Button';


import './Auth.css';



const Login = props => {


    const [user, setUser] = useState({
        data: {
            username: '',
            password: ''
        }
    });

    const [error, setError] = useState({
        usernameError: '',
        passwordError: ''
    });

    const { username, password } = user.data;
    const { usernameError, passwordError } = error;

    

    

   

    return (
        <div className='auth-wrapper'>
            <div className='auth-inner'>
                <form>
                    <h3>Sign In</h3>

                    <div className='form-group'>
                        <FormInput
                            type='text'
                            name='username'
                            label='Username'
                            className='form-control'
                            placeholder='Enter Username'
                            value={username}
                            error={usernameError}
                           
                        />
                    </div>
                    <div className='form-group'>
                        <FormInput
                            type='password'
                            name='password'
                            label='Password'
                            className='form-control'
                            placeholder='Enter Password'
                            value={password}
                            error={passwordError}
                           
                        />
                    </div>

                    <Button
                        type='submit'
                        label='Sign In'
                        className='btn btn-primary btn-block'
                    />
                    <p className='forgot-password text-right'>
                        Not yet registered?{' '}
                        <Link to={'/sign-up'}>Register</Link>
                    </p>
                </form>

                
            </div>
        </div>
    );
};

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    errors: PropTypes.string
};



export default Login;
