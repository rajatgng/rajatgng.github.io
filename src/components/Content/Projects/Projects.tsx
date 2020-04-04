import React, { FunctionComponent } from 'react';
import './Projects.scss'
interface OwnProps {}

type Props = OwnProps;

const Projects: FunctionComponent<Props> = (props) => {

  return (
      <div className={'projects'} id={'projects'}>
          Projects
      </div>
  );
};

export default Projects;
