'use client'
import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        setCurrentTime(formatTime(new Date()));

        const interval = setInterval(() => {
            setCurrentTime(formatTime(new Date()));
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>{currentTime}</div>
    )
}

function formatTime(date: Date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
}