import React from "react";
import ComponentB from "./ComponentB";
import { IUserInfo } from "./IUserInfo";

interface IProps {

    //userInfo: IUserInfo
}

interface IState {

}


let ComponentA:React.FC<IProps> = () => {


   return (

    
         <React.Fragment>
            
            <h1>ComponentA Component</h1>
            <ComponentB/>
           
         </React.Fragment>


   );

}


export default ComponentA;