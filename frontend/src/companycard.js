import React from 'react';
import "./App.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Company({name}) {

    return (
        <div className="company">
            <h3 className="heading">{name}</h3>
            <p>Link to apply:</p>
            <p>Deadline:</p>
            <Popup trigger={
                <button>DETAILS</button>}
                modal nested>
                    {
                        close =>(
                            <div className='modal'>
                                <div className="content">
                                    COMPANY DETAILS
                                </div>
                                <div className='closebutton'>
                                    <button onClick={
                                        () => close()
                                    }>
                                        close
                                    </button>  
                                </div>
                            </div>
                        )
                    }
                </Popup>
            
            
        </div>
    );
}

export default Company;