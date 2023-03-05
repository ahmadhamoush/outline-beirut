import '@/styles/globals.css'
import '@/styles/styles.css'
import '@/styles/nav.css'
import 'bootstrap/dist/css/bootstrap.css'
import "animate.css/animate.min.css";
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
            if (loader)
                loader.style.display = 'none';
        }
    }, []);
    return <>
    <Component {...pageProps } />
    <Analytics /></>
}