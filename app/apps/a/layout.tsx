// pages or components where RootLayout is defined
import dynamic from 'next/dynamic';
import Window from "../../components/window";

import { ReactNode } from 'react';

/**
 * Component that wraps the children components in the AuthCheck component. So if the user is
 * not authenticated, the AuthCheck component will redirect the user to the login page.
 */
const AuthCheck = dynamic(() => import('../../js/Auth/AuthCheck'), {
    ssr: false  // Disable server-side rendering for this component
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <AuthCheck>{children}</AuthCheck>
    );
}
