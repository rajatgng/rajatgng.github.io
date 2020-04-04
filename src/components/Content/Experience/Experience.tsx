import React, {FunctionComponent} from 'react';
import './Experience.scss';

interface OwnProps {
}

type Props = OwnProps;

const Experience: FunctionComponent<Props> = (props) => {

    return (
        <div className={'experience'} id={'experience'}>
            Experience
        </div>
    );
};

export default Experience;
