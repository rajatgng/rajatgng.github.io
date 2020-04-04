import React, { FunctionComponent } from 'react';
import './Certificates.scss';
interface OwnProps {}

type Props = OwnProps;

const Certificates: FunctionComponent<Props> = (props) => {

  return (
      <div className={'certificates'} id={'certificates'}>
          Certificated
      </div>
  );
};

export default Certificates;
