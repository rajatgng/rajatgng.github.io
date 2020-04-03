import React, {FunctionComponent} from 'react';
import './About.scss';

interface OwnProps {
}

type Props = OwnProps;

const About: FunctionComponent<Props> = (props) => {

    return (
        <div className={'about'} id={'about'}>
            Rajat verma About
        </div>
    );
};

export default About;
