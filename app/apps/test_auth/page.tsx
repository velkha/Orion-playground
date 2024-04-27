'use client'
import '../../ui/styles/auth.css'
import {login} from '../../js/Auth/Service'
import React, { useState } from 'react';
import {fetchData} from '../../js/apiCall/fetchData'

export default function TestAuth() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const handleAuth = () => {
        console.log('Auth');
        fetchData('http://localhost:9992/api/auth/signup', 'POST', {user, password})
    }
    const handleLogin = () => {
        console.log(login(user, password));
    }


    return (
            <div className="auth_menu">
                <div className='show_message'>
                    <h1>Test Auth</h1>
                </div>
                <div className='login_details'>
                <input type='text' placeholder='Usuario' value={user} onChange={e => setUser(e.target.value)} />
                <input type='text' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input type='password' placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='send_details'>
                    <button className='default' onClick={handleAuth}>Testear Auth</button>
                    <button className='default' onClick={handleLogin}>Testear Login</button>
                </div>
            </div>
    );
}
