import styles from './Projects.module.css'

import React, { useState } from 'react';

function Projects() {

    const [projects, setProjects] = useState([]);
    const urlGitHub = 'https://api.github.com/users/Charlesjahn/repos'


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
        <section>
            <h1>Projects</h1>
            {projects.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.title_list}>
                            <th>Code link</th>
                            <th>Language</th>
                            <th>Page</th>
                            <th className={styles.description_big_screen}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(project => (
                            project.name.toUpperCase() !== "CHARLESJAHN" && (
                                <>
                                    <tr key={project.id} className={styles.table_row}>
                                        <td>
                                            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                                {capitalizeTitle(project.name)}
                                            </a>
                                        </td>
                                        <td>
                                            {project.language && (
                                                <p>{checkType(project.language)}</p>
                                            )}
                                        </td>
                                        <td >
                                            {project.has_pages ? (
                                                <a href={`https://charlesjahn.github.io/${project.name}/`} target="_blank" rel="noopener noreferrer">
                                                    {project.name}
                                                </a>
                                            ) : (
                                                <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                                    {project.name}
                                                </a>
                                            )}

                                        </td>
                                        <td className={styles.description_big_screen}>
                                            {project.description && (
                                                <p>{checkType(project.description)}</p>
                                            )}
                                        </td>
                                    </tr>
                                    <tr className={styles.table_row} >
                                        <td colspan="3" >
                                            <div className={styles.description_small_screen}>
                                                {project.description && (
                                                    <p>{checkType(project.description)}</p>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )))}
                    </tbody>
                </table>

            )}
        </section>
    )
}

export default Projects