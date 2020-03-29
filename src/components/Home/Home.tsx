import React, {FunctionComponent} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import './Home.scss'

interface OwnProps {
}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {

    return (
        <main className={'home'}>
            <Sidebar/>
            <Content/>
        </main>
    );
};

export default Home;
