import React, {FunctionComponent} from 'react';
import About from "./About/About";
import './Content.scss';
import Education from "./Education/Education";

interface OwnProps {
}

type Props = OwnProps;

const Content: FunctionComponent<Props> = (props) => {

    return (
        <section className={'content'}>
            <About/>
            <Education/>
        </section>
    );
};

export default Content;
