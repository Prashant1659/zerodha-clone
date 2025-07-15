import React from 'react'
import { Link } from 'react-router-dom';
function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <h1 className='fs-3 text-center'> People</h1>
            </div>
            <div className='row p-5 text-muted'>
                <div className='col-6 text-center'>
                    <img src='media/images/nithinKamath.jpg' className='' style={{borderRadius:"100%",width:"60%"}}/>
                    <p className='fs-5 mt-3'>Nithin Kamath</p>
                    <p className='text-muted'>Founder, CEO</p>
                </div>
                <div className='col-6 p-5' style={{lineHeight:"1.9"}}>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <Link to={'/'}>Homepage</Link> / <Link to={'/products'}>TradingQnA</Link> / Twitter
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Team;