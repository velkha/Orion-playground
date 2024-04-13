'use client'
import { Application } from '@splinetool/runtime';
import React, { useEffect } from 'react';

export default function Splinev2() {
    useEffect(() => {
        const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
        const app = new Application(canvas);
        app.load('https://prod.spline.design/ypuAN8hfJMIXovgu/scene.splinecode');
    }, []);

    return (
        <div>
            <canvas id="canvas3d"></canvas>
        </div>
    );
}