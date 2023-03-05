import '@/styles/globals.css'
import '@/styles/styles.css'
import '@/styles/nav.css'
import 'bootstrap/dist/css/bootstrap.css'
import "animate.css/animate.min.css";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
    return <>
    <Component {...pageProps } />
    <Analytics /></>
}