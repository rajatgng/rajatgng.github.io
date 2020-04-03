import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import './About.scss';

interface OwnProps {
}

type Props = OwnProps;

const About: FunctionComponent<Props> = (props) => {
    const aboutRef = useRef(null);
    const [per,setPer] = useState<number>(0);
    const cb:IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) =>{
        console.log(entries[0].intersectionRatio);
        setPer(entries[0].intersectionRatio);
        let k = document.getElementById('edu');
        if(entries[0].intersectionRatio > 0.5){

            k?.classList.add('sidebar-edu--active');
        }
        else {
            k?.classList.remove('sidebar-edu--active')
        }
    };

    useEffect(()=>{
        console.log(aboutRef.current);
        const o = new IntersectionObserver(cb,{threshold:[0,0.25,0.5,1]});
        o.observe(aboutRef.current!)
    },[per])
    return (
        <section className={'about'} id={'about'} ref={aboutRef}>
            Rajat verma About
        </section>
    );
};

export default About;
