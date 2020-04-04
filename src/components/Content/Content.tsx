import React from 'react';
import About from "./About/About";
import './Content.scss';
import Education from "./Education/Education";
import ActiveViewport from "../../hoc/ActiveViewport";
import Experience from "./Experience/Experience";

interface ContentProps {
}


const Content: React.FC<ContentProps> = (props: ContentProps) => {

    return (
        <section className={'content'}>
            <ActiveViewport component={<About/>} type={'about'}/>
            <ActiveViewport component={<Education/>} type={'edu'}/>
            <ActiveViewport component={<Experience/>} type={'exp'}/>
        </section>
    );
};

export default Content;
