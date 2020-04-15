import React, {FunctionComponent} from 'react';
import './SectionHeader.scss';

interface OwnProps {
}

type Props = OwnProps;

const SectionHeader: FunctionComponent<Props> = (props) => {

    return (
        <div className={'section-header'}>
            <h2>About</h2>
        </div>
    );
};

export default SectionHeader;
