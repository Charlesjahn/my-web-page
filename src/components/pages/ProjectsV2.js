import 'react-vertical-timeline-component/style.min.css'
import styles from './ProjectsV2.module.css'

import { FaPython, FaJava, FaJs } from 'react-icons/fa'

import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'



import React, { useState } from 'react';


function Timeline() {

    const [projects, setProjects] = useState([]);
    const urlGitHub = 'https://api.github.com/users/Charlesjahn/repos'

    function whichStyle(type) {

        const styleMap = {
            JavaScript: { background: "#F9C74F" },
            Python: { background: "#00BFFF" },
            Java: { background: "#FF6347" },
            course: { background: "#FF69B4" },
            graduation: { background: "#00BFFF" },
            born: { background: "#9400D3" },
        };

        return styleMap[type] || {};
    }

    function whichIcon(type) {
        const iconMap = {
            Python: <FaPython />,
            JavaScript: <FaJs />,
            Java: <FaJava />,
        };

        const IconComponent = iconMap[type] || null;
        return IconComponent;
    }



    fetch(urlGitHub, {
        method: 'GET'
    })
        .then((reponse) => reponse.json())
        .then(data => setProjects(data))
        .catch((err) => {
            console.log(err)
        })

    function checkType(type) {
        const typeLang = {
            CSS: "JavaScript",
            HTML: "JavaScript",
        };

        const languageType = typeLang[type] || type;

        return languageType;
    }

    function capitalizeTitle(title) {
        return title.replace(/(?:^|\s)\w/g, firstLetter => firstLetter.toUpperCase());
    }



    return (
        <section className={styles.sectionTL}>
            <h1>Projects</h1>
            <VerticalTimeline className={styles.verti_timel}>
                {
                    projects.map(project => {

                        return (
                            project.name.toUpperCase() !== "CHARLESJAHN" && (
                                <VerticalTimelineElement
                                    className={styles.verti_timel_ele_name}
                                    key={project.id}
                                    iconStyle={whichStyle(checkType(project.language))}
                                    icon={whichIcon(checkType(project.language))}
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