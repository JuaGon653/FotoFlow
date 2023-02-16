import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import { UserContext } from '../utils/UserContext';
import Auth from '../utils/auth';

export default function Login() {
    const [{ user }, dispatch] = useContext(UserContext);

    function handleLogin(userData) {
        dispatch({
            type: 'LOGIN_USER',
            payload: { data: userData }
        });
    };

    const [formState, setFormState] = useState({username: '', email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);

            handleLogin(data.login.user);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            username: '',
            email: '',
            password: ''
        });

        window.location.href = '/';
    };

    return (
    <form>
        <div className="grid-container">
            <div className="grid-x grid-padding-x">
                <div className="medium-6 cell">
                    <label>Email:
                    <input name="email" type="email" value={formState.email} onChange={handleChange} placeholder="example@gmail.com" />
                    </label>
                </div>
                <div className="medium-6 cell">
                    <label>Password:
                    <input name="password" type="password" value={formState.password} onChange={handleChange} />
                    </label>
                </div>
                <div className="input-group-button">
                    <input type="submit" className="button" value="Submit" onClick={handleFormSubmit} />
                </div>
            </div>
        </div>
    </form>
    )
}