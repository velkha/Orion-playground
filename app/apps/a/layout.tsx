// pages or components where RootLayout is defined
import dynamic from 'next/dynamic';
import Window from "../../components/window";

import { ReactNode } from 'react';

const AuthCheck = dynamic(() => import('../../js/Auth/AuthCheck'), {
    ssr: false  // Disable server-side rendering for this component
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <AuthCheck>{children}</AuthCheck>
    );
}
