import React, {FunctionComponent, useEffect} from 'react';
import './About.scss';

interface OwnProps {
}

type Props = OwnProps;

const About: FunctionComponent<Props> = (props) => {
        useEffect(()=>{
            console.log("about mount");
            return(()=>{
                console.log("about unmount");
            })
        });
    return (
        <section className={'about'} id={'about'}>
            Rajat verma About
        </section>
    );
};

export default About;
