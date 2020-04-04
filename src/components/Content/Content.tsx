import React from 'react';
import About from "./About/About";
import './Content.scss';
import Education from "./Education/Education";
import ActiveViewport from "../../hoc/ActiveViewport";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Certificates from "./Certificates/Certificates";
import Contact from "./Contact/Contact";

interface ContentProps {
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {

    return (
        <section className={'content'}>
            <ActiveViewport component={<About/>} type={'about'}/>
            <ActiveViewport component={<Experience/>} type={'exp'}/>
            <ActiveViewport component={<Projects/>} type={'pro'}/>
            <ActiveViewport component={<Skills/>} type={'skill'}/>
            <ActiveViewport component={<Education/>} type={'edu'}/>
            <ActiveViewport component={<Certificates/>} type={'cert'}/>
            <ActiveViewport component={<Contact/>} type={'cont'}/>
        </section>
    );
};

export default Content;
