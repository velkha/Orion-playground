'use client'
import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
    )
}