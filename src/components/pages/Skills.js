import styles from './Skills.module.css'

import skillElements from '../layout/SkillsElement'

function Skills() {
    return (
        <section className={styles.section_skill}>
            <h1>Skills</h1>
            <div className={styles.main_div_skill}>

                {skillElements.map(s => (
                    <div key={s.id}>

                        <label className={styles.label}>{s.skill}</label>

                        <div className={styles.skill_block}>
                            <span className={styles.span_shadown}></span>
                            <span className={styles.span_lvl} style={{ width: `${s.level}%` }}></span>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Skills



/* <div>
<label className={styles.label}>HTML</label>
<div className={styles.skill_block}>
    <div className={styles.div_shadown}></div>
    <div className={styles.div_lvl}></div>
</div>
</div> */
