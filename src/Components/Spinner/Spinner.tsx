import React from 'react';
import './Spinner.css';

const Spinner: React.FC  = () => {
    return(
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Spinner;