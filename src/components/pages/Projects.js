import 'react-vertical-timeline-component/style.min.css'
import styles from './Projects.module.css'

import { FaPython, FaJava, FaJs, FaReact, FaUnity } from 'react-icons/fa'

import React, { useState, useEffect } from 'react';

function Timeline() {
    const [projects, setProjects] = useState([]);
    const urlGitHub = 'https://api.github.com/users/Charlesjahn/repos'

    useEffect(() => {
        fetch(urlGitHub, {
            method: 'GET'
        })
            .then((reponse) => reponse.json())
            .then(data => setProjects(data))
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function whichStyle(type) {

        const styleMap = {
            javascript: { color: "#F9C74F" },
            python: { color: "#00FF00" },
            java: { color: "#FF6347" },
            react: { color: "#00BFFF" },            
            unity: { color: "#c300ff" },
        };
        return styleMap[type] || {};
    }

    function capitalizeTitle(title) {
        return title.replace(/(?:^|\s)\w/g, firstLetter => firstLetter.toUpperCase());
    }

    function whichIcon(type) {
        const iconMap = {
            python: <FaPython />,
            javascript: <FaJs />,
            java: <FaJava />,
            react: <FaReact />,
            unity: <FaUnity />,
        };
        return iconMap[type] || null;
    }

    function importAll(r) {
        let images = {};
        r.keys().forEach((item) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    const images = importAll(require.context('../../img/projects', false, /\.(png|jpe?g|svg)$/));

    function whichImg(name) {
        return images[`${name.toLowerCase()}.png`] || null;
    }

    return (
        <section className={styles.sectionTL}>
            <h1>Projects</h1>

            <div className={styles.div_projects}>
                {
                    projects.map(p => {

                        const typeLanguase = p.topics[0]?.toLowerCase();

                        return (
                            p.name.toUpperCase() !== "CHARLESJAHN" && (
                                <div className={styles.project}>
                                    
                                    <h3>
                                        {capitalizeTitle(p.name)} 
                                        <span className={styles.iconspan} style={whichStyle(typeLanguase)} >{whichIcon(typeLanguase)}</span>
                                        </h3>
                                    <p>{p.description}</p>

                                    {whichImg(p.name) && <img src={whichImg(p.name)} alt={p.name} />}

                                    <div className={styles.divbtn}>
                                        <a href={p.html_url} target="_blank" rel="noopener noreferrer">Code</a>
                                        {p.has_pages ? (
                                            <a href={`https://charlesjahn.github.io/${p.name}/`} target="_blank" rel="noopener noreferrer">
                                                Check it
                                            </a>
                                        ) : (
                                            <a href={p.homepage} target="_blank" rel="noopener noreferrer">
                                                Check it
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Timeline
