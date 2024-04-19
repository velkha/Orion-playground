'use client'
import React, { useState, ReactNode } from 'react';
import { OpenAppsContext, OpenApp } from './OpenAppsContext';

interface OpenAppsProviderProps {
    children: ReactNode;
}

export const OpenAppsProvider: React.FC<OpenAppsProviderProps> = ({ children }) => {
    const [openApps, setOpenApps] = useState<OpenApp[]>([]);

    return (
        <OpenAppsContext.Provider value={{ openApps, setOpenApps }}>
            {children}
        </OpenAppsContext.Provider>
    );
};