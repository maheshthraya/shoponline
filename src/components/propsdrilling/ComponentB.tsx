import React from "react";
import ComponentC from "./ComponentC";

interface IProps {}

interface IState {

}


let ComponentB:React.FC<IProps> = () => {


   return (

    
    <React.Fragment>
    <h1>ComponentB Component</h1>
    <ComponentC />
 </React.Fragment>


   );

}


export default ComponentB;