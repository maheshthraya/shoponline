import React , {useState} from 'react';
import Message from './components/Message';
import ComponentA from './components/propsdrilling/ComponentA';
import { IUserInfo } from './components/propsdrilling/IUserInfo';
import UserContext from './components/propsdrilling/UserContext';

import './App.css';

interface IProps{

}

interface IState{

  userInfo : IUserInfo;

}



let App:React.FC<IProps> = () => {


let [appState, setAppState] = useState<IState>({

      userInfo : {
        author: 'Mahesh',
        channel: 'reactjs'
      }

    });

  return (
    <React.Fragment>
      
      <small>{JSON.stringify(appState.userInfo)}</small>

      <UserContext.Provider value={appState.userInfo}>
      <ComponentA />
      </UserContext.Provider>
      
    </React.Fragment>
  );
}

export default App;
