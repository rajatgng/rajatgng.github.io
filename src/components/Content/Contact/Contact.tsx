import React, { FunctionComponent } from 'react';
import './Contact.scss'
interface OwnProps {}

type Props = OwnProps;

const Contact: FunctionComponent<Props> = (props) => {

  return (
      <div className={'contact'} id={'contact'}>
          Contacts
      </div>
  );
};

export default Contact;
