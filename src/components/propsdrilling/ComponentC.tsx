import React, { useContext } from "react";
import UserContext from "./UserContext";

interface IProps {}

interface IState {

}


let ComponentC:React.FC<IProps> = () => {

   let userInfo = useContext(UserContext);


   return (

    
      <React.Fragment>
      <h1>ComponentC Component</h1>
      <small>"test"+ {JSON.stringify(userInfo)}</small>
      </React.Fragment>


   );

}


export default ComponentC;