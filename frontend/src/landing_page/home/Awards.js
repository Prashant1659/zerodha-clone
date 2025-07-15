import React from 'react'

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <img src='media/images/largestBroker.svg' alt="largestBroker"/>
                </div>
                <div className='col-lg-6 col-sm-12 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order<br/>volumes in india by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6 mt-3'>
                        <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                        
                    </ul>
                        </div>
                        <div className='col-6 mt-3'>
                        <ul>
                        <li>
                            <p>Stocks and IPO's</p>
                        </li>
                        <li>
                            <p>Direct Mutual Funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt. Securities</p>
                        </li>
                        
                    </ul>
                        </div>
                    </div>
                    <img className='col-10' src='media/images/pressLogos.png' alt='pressLogo'/>
                </div>
            </div>
        </div>
     );
}

export default Awards;