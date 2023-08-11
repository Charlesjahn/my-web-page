import 'react-vertical-timeline-component/style.min.css'
import styles from './Timeline.module.css'

import { FaBirthdayCake, FaSchool, FaUserGraduate, FaBook, FaIndustry, FaPlaneArrival } from 'react-icons/fa'

import timelineElements from '../layout/TimelineElements'

import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'



function Timeline() {
    function whickStyle(type) {

        const styleMap = {
            work: { background: "#06D6A0" },
            school: { background: "#F9C74F" },
            travel: { background: "#FF6347" },
            course: { background: "#FF69B4" },
            graduation: { background: "#00BFFF" },
            born: { background: "#9400D3" },
        };

        return styleMap[type] || {};
    }
    function whickIcon(type) {
        const iconMap = {
            work: <FaIndustry />,
            school: <FaSchool />,
            travel: <FaPlaneArrival />,
            course: <FaBook />,
            graduation: <FaUserGraduate />,
            born: <FaBirthdayCake />,
        };

        const IconComponent = iconMap[type] || null;

        return IconComponent;
    }



    return (
        <section className={styles.sectionTL}>
            <h1>Timeline</h1>
            <VerticalTimeline>
                {
                    timelineElements.reverse().map(e => {
                        
                        return (
                            <VerticalTimelineElement
                                key={e.key}
                                date={e.date}
                                dateClassName='date'
                                iconStyle={whickStyle(e.icon)}
                                icon={whickIcon(e.icon)}
                            >
                                <h3 className="vertical-timeline-element-title">{e.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{e.location}</h5>
                                <p id="description">{e.description}</p>

                            </VerticalTimelineElement>
                        )

                    })
                }

            </VerticalTimeline>
        </section>
    )
}

export default Timeline