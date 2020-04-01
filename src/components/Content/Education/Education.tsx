import React, {FunctionComponent, useEffect} from 'react';
import './Education.scss';
interface OwnProps {}

type Props = OwnProps;

const Education: FunctionComponent<Props> = (props) => {
    useEffect(()=>{
        console.log("edu mount");
        return(()=>{
            console.log("edu unmount");
        })
    })
  return (
      <div className={'education'} id={'education'}>
          educaton

      </div>
  );
};

export default Education;
