'use client'
import '../../ui/styles/auth.css'
import {login, logout} from '../../js/Auth/Service'
import React, { useState } from 'react';
import {fetchData} from '../../js/apiCall/fetchData'
import { log } from 'console';

export default function TestAuth() {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleAuth = () => {
        console.log('Auth');
        fetchData('http://localhost:9992/api/auth/signup', 'POST', {username, email, password}).then(res => {
            if (res) {
                setMessage('Auth Success');
            } else {
                setMessage('Auth Failed');
            }
        });
        
    }
    const handleLogin = () => {
        login(username, password).then(res => {
            console.log(res);
            if (res) {
                setMessage('Login Success');
            } else {
                setMessage('Login Failed');
            }
        });
    }
    const handleLogout = () => {
        console.log('Logout');
        fetchData('http://localhost:9992/api/auth/signout', 'POST', {username, email, password}).then(res => {
            if (res) {
                setMessage('Logout Success');
            } else {
                setMessage('Logout Failed');
            }
            logout();
        });

    }


    return (
            <div className="auth_menu">
                <div className='show_message'>
                    <h1>{message}</h1>
                </div>
                <div className='login_details'>
                <input type='text' placeholder='Usuario' value={username} onChange={e => setUser(e.target.value)} />
                <input type='text' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input type='password' placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='send_details'>
                    <button className='default' onClick={handleAuth}>Testear Auth</button>
                    <button className='default' onClick={handleLogin}>Testear Login</button>
                    <button className='default' onClick={handleLogout}>Testear Logout</button>
                </div>
            </div>
    );
}
