import React from 'react';
import './wrapper.css'


const Wrapper = ({children}) => {
    return (
        <div className='retro-container old-crt-monitor'>
            {children}
        </div>
    );
};

export default Wrapper;