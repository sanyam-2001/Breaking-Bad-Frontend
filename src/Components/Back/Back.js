import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
const Back = () => {
    const [redirect, setRedirect] = useState(false);
    if(redirect){
        return <Redirect to="/"/>
    }
    return ( 
        <div onClick={()=>setRedirect(true)} style={{position:'absolute', top:"5%", right:'5%'}}>
            <button style={{
                padding:"1em",
                fontSize:"1em",
                border:'none',
                outline:'none',
                cursor:'pointer'
            }}>Back To Home</button>
        </div>
     );
}
 
export default Back;