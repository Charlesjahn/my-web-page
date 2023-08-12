import styles from './Projects.module.css'

import React, { useState, useEffect } from 'react';

function Projects() {

    const [projects, setProjects] = useState([]);
    const urlGitHub = 'https://api.github.com/users/Charlesjahn/repos'


    fetch(urlGitHub, {
        method: 'GET'
    })
        .then((reponse) => reponse.json())
        .then(data => setProjects(data))
        .catch((err) => { console.log(err) })


    return (
        <section className={styles.section_projects}>
            <h1>Projects</h1>
            {projects.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {projects.map(project => (
                        <div key={project.id}>
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                            Github link of {project.name}
                            </a>
                            {project.has_pages && (
                                <a href={`https://charlesjahn.github.io/${project.name}/`} target="_blank" rel="noopener noreferrer">
                                    {project.name}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Projects