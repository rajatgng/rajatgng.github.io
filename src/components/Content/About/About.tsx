import React, {FunctionComponent} from 'react';
import './About.scss';
import SectionHeader from "../../customs/SectionHeader/SectionHeader";

interface OwnProps {
}

type Props = OwnProps;

const About: FunctionComponent<Props> = (props) => {

    return (
        <div className={'about'} id={'about'}>
            <SectionHeader/>
            <article>
                <div className={'subheading'}>
                    <p>
                        Mission-driven, enthusiastic software engineer with 2+ years experience.
                    </p>
                </div>
                <p>
                    I’ve always sought out opportunities and challenges that are meaningful to me.
                    As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making
                    things, and my mission-driven work ethic to literally change the world. That's why I’m excited to
                    make a big impact at a high growth company.

                </p>
            </article>
        </div>
    );
};

export default About;
