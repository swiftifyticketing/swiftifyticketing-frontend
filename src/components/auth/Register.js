import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FormInput } from '../reusable/FormInput';
import { RadioInput } from '../reusable/RadioInput';
import { Button } from '../reusable/Button';

import './Auth.css';

const Register = props => {
    

    const [user, setUser] = useState({
        data: {
            username: '',
            password: '',
            role: ''
        }
    });

    const [error, setError] = useState({
        usernameError: '',
        passwordError: '',
        roleError: ''
    });

    

    const { username, password } = user.data;
    const { usernameError, passwordError, roleError } = error;

    

    

    return (
        <div className='auth-wrapper'>
            <div className='auth-inner'>
                <form>
                    <h3>Sign Up</h3>

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
                    <div className='form-group'>
                        <label>Role</label>
                        <br />
                        <div className='form-check form-check-inline'>
                            <RadioInput
                                id='inlineRadio1'
                                name='role'
                                labelClassName='form-check-label'
                                className='form-check-input'
                                value='User'
                                error={roleError}
                                
                            />
                        </div>
                        <div className='form-check form-check-inline'>
                            <RadioInput
                                id='inlineRadio2'
                                name='role'
                                labelClassName='form-check-label'
                                className='form-check-input'
                                value='Admin'
                                error={roleError}
                                
                            />
                        </div>
                    </div>

                    <Button
                        type='submit'
                        label='Sign Up'
                        className='btn btn-primary btn-block'
                    />
                    <p className='forgot-password text-right'>
                        Already registered? <Link to={'/sign-in'}>Login</Link>
                    </p>
                </form>
               
            </div>
        </div>
    );
};

Register.propTypes = {
    createUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    errors: PropTypes.string
};



export default Register;
