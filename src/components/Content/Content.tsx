import React from 'react';
import About from "./About/About";
import './Content.scss';
import Education from "./Education/Education";

interface ContentProps {
}


const Content: React.FC<ContentProps> = (props: ContentProps) => {
    return (
        <section className={'content'}>
            <About/>
            <Education/>
        </section>
    );
};

export default Content;
