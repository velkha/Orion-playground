// OpenAppsContext.tsx
'use client'
import React, { createContext, useContext, ReactNode } from 'react';

export interface OpenApp {
    name: string;
    component: React.ComponentType<any>;
    state: any; // Optionally, you can make this more specific based on your application's needs
  }
interface OpenAppsContextProps {
  openApps: OpenApp[];
  setOpenApps: React.Dispatch<React.SetStateAction<OpenApp[]>>;
}

export const OpenAppsContext = createContext<OpenAppsContextProps>({
  openApps: [],
  setOpenApps: () => {}, // Default empty function
});

export const useOpenApps = () => useContext(OpenAppsContext);
