import React, {FunctionComponent} from 'react';
import './Sidebar.scss';

interface OwnProps {
    className?:string
}

type Props = OwnProps;

const Sidebar: FunctionComponent<Props> = (props) => {
    return (
        <nav className={'sidebar'}>
            <ul>
                <li className={'sidebar__listitem'}>
                    <a id={"logo-container"} aria-label={"Navigate to the beginning of the page"} href={"#intro"}>
                        <h1>
                            Rajat Verma<span>Full Stack Developer</span>
                        </h1>
                    </a>
                </li>
                <li className={'sidebar__listitem'}>
                    <a aria-label={"Navigate to the About section"} href={"#about"}>
                        <span>About</span>
                    </a>
                </li>
                <li className={'sidebar__listitem'}>
                    <a aria-label="Navigate to the Experience section" href={"#experience"}>
                        <span>Experience</span>
                    </a>
                </li>
                <li className={'sidebar__listitem'}>
                    <a aria-label="Navigate to the Projects section" href={"#projects"}>
                        <span>Projects</span>
                    </a>
                </li>
                <li className={'sidebar__listitem'}>
                    <a aria-label="Navigate to the Skills section" href={"#skills"}>
                        <span>Skills</span>
                    </a>
                </li>
                <li className={'sidebar__listitem'}>
                    <a aria-label="Navigate to the Education section" href={"#education"}>
                        <span>Education</span>
                    </a>
                </li>
                <li className={'sidebar__listitem'}>
                    <a aria-label="Navigate to the Contact section" href={"#contact"}>
                        <span>Contact</span>
                    </a>
                </li>
                <li className={'sidebar__listitem'}>
                    <a aria-label="Open Rajat's resume in a new tab">
                        <span>Resume</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
