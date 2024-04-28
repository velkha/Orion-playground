'use client'
import { useEffect, useState } from 'react';

const AuthCheck = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const token = window.localStorage.getItem('orion_token');
        setIsAuthorized(!!token);
    }, []);

    return isAuthorized ? <>{children}</> : null;
};

export default AuthCheck;
