import Head from 'next/head';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
// import ParticlesBg from "particles-bg";


export default function Home() {

    const [ParticlesBg, setParticlesBg] = useState(null);
    useEffect(() => {
        const mod = dynamic(() => import('particles-bg'));
        setParticlesBg(mod);
    }, []);

    return (
        <div id="app">
            <Head>
                <title>Elbarae</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="bg">
                { ParticlesBg && <ParticlesBg type="lines" /> }
            </div>
            <div className="main">
                <h1 className="text" data-text="Mox Adventu...">Mox Adventu...</h1>
            </div>
        </div>
    )
}
