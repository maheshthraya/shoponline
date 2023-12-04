import React , { useState } from 'react';


interface IProps{
    msg : string;
    time: string;
}

interface IState{
    count : number;
}

let Message:React.FC<IProps> = ({msg,time}) => {

    let [countState, setCountState] = useState<IState>({

        count : 10

    });

    let updateCount = () => {

        setCountState ({ 

            count : countState.count + 1

        });

    };

    return (

        <React.Fragment>
            <h2>App Component</h2>
            <h2>{msg}</h2>
            <h2>{time}</h2>
            <div className="h1">{countState.count}</div>
            <button onClick={updateCount} className="btn btn-success btn-sm">Increment</button>  
        </React.Fragment>

    )

 
}

export default Message;