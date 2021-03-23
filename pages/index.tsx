import Head from 'next/head';
import Navbar from "../components/navbar";
import styles from "./index.module.scss";
import Shuffle from "../components/shuffle";


export default function Home() {

    const jobs = [
        {
            text: "software developer",
            icon: "icon-code"
        },
        {
            text: "programmer",
            icon: "icon-keyboard"
        },
        {
            text: "code artisan",
            icon: "icon-lightbulb-o"
        }
    ];

    const tasks = [
        {
            text: "make websites",
            icon: "icon-globe"
        },
        { 
            text:"build desktop apps",
            icon: "icon-desktop"
        },
        {
            text: "craft mobile apps",
            icon: "icon-android"
        },
        {
            text: "steal code",
            icon: "icon-eye"
        }
    ];
    
    return (
        <div id="app">
            <Head>
                <title>Elbarae</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.text}>
                    Hey there 👋, my name is 
                    <strong className={styles.author}>Elbarae Rguig</strong>
                    I'm a <strong><Shuffle textObj={jobs} duration={3000} /></strong> (mainly focused on backend)
                    <br />
                    Fueled with <i title="icon-coffee" className="icon-coffee"></i> and armed with my <i title="icon-keyboard" className="icon-keyboard"></i>, I get the job done (mostly)
                    <br />
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>My arsenal</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            <tr>
                                <ul>
                                    <li>Docker</li>
                                    <li>Typescript</li>
                                </ul>
                                <ul>
                                    <li>PostgreSQL</li>
                                    <li>React</li>
                                </ul>
                            </tr>
                            <tr>
                                <ul>
                                    <li>Nginx</li>
                                    <li>React Native</li>
                                </ul>
                                <ul>
                                    <li>Linux</li>
                                    <li>NodeJS</li>
                                </ul>
                            </tr>
                        </tbody>
                        <tfoot className={styles.tfoot}>
                            <tr>
                                <td>I <Shuffle textObj={tasks} duration={3000} /></td>
                            </tr>
                        </tfoot>
                    </table>
                    Find me elsewhere: <div className={styles.social}> <a rel="author" target="_blank" aria-label="github" href="https://github.com/Elbarae1921"><i title="Github" className="icon-github"></i></a> <a rel="author" target="_blank" aria-label="Linkedin" href="https://www.linkedin.com/in/elbarae-rguig/"><i title="Linkedin" className="icon-linkedin"></i></a> <a rel="author" target="_blank" aria-label="Email" href="mailto:elbarae1921@gmail.com"><i title="Email" className="icon-envelope"></i></a> </div>
                </div>
            </div>
        </div>
    )
}
