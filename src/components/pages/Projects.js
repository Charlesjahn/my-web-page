import 'react-vertical-timeline-component/style.min.css'
import styles from './Projects.module.css'

import { FaPython, FaJava, FaJs, FaReact } from 'react-icons/fa'

import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'



import React, { useState, useEffect } from 'react';


function Timeline() {

    const [projects, setProjects] = useState([]);
    const urlGitHub = 'https://api.github.com/users/Charlesjahn/repos'

    function whichStyle(type) {

        const styleMap = {
            javascript: { background: "#F9C74F" },
            python: { background: "#00FF00" },
            java: { background: "#FF6347" },
            react: { background: "#00BFFF" },
        };
        return styleMap[type] || {};
    }

    function whichIcon(type) {
        const iconMap = {
            python: <FaPython />,
            javascript: <FaJs />,
            java: <FaJava />,
            react: <FaReact />,
        };
        return iconMap[type] || null;
    }


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


    function capitalizeTitle(title) {
        return title.replace(/(?:^|\s)\w/g, firstLetter => firstLetter.toUpperCase());
    }



    return (
        <section className={styles.sectionTL}>
            <h1>Projects</h1>
            <VerticalTimeline className={styles.verti_timel}>
                {
                    projects.map(project => {

                        const typeLanguase = project.topics[0]?.toLowerCase();

                        return (
                            project.name.toUpperCase() !== "CHARLESJAHN" && (
                                <VerticalTimelineElement
                                    className={styles.verti_timel_ele_name}
                                    key={project.id}
                                    iconStyle={whichStyle(typeLanguase)}
                                    icon={whichIcon(typeLanguase)}
                                >
                                    <h3>{capitalizeTitle(project.name)}</h3>

                                    <p className={styles.pTime}>{project.description}</p>
                                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">Code</a>

                                    {project.has_pages ? (
                                        <a href={`https://charlesjahn.github.io/${project.name}/`} target="_blank" rel="noopener noreferrer">
                                            Check it
                                        </a>
                                    ) : (
                                        <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                            Check it
                                        </a>
                                    )}
                                </VerticalTimelineElement>
                            ))

                    })
                }

            </VerticalTimeline>
        </section>
    )
}

export default Timeline