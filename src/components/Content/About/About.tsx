import React, {FunctionComponent} from 'react';
import './About.scss';
interface OwnProps {
}

type Props = OwnProps;

const About: FunctionComponent<Props> = (props) => {

    return (
        <section className={'about'} id={'about'}>
            Rajat verma About
        </section>
    );
};

export default About;
