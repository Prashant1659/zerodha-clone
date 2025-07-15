import React from 'react'
import {Link} from 'react-router-dom';

function Universe() {
    return ( 
        <div className='container mb-5 text-center'>
            <div className='row'>
                <p className='fs-4 m-5 text-muted'>Want to know more about our technology stack? Check out the <Link style={{textDecoration:"none"}}>Zerodha.tech</Link> blog.</p>
            </div>
            <div className='row mt-3 mb-3'>
                <h1 className='fs-1 text-muted'>The Zerodha Universe</h1>
                <p className='mt-3 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row'>
                <div className='col'></div>
                <div className='col-3 text-center'>
                    <div className='row'>
                        <img src='media/images/zerodhaFundhouse.png' className='mx-auto' style={{height:"50%", width:"70%"}}/>
                        <p className='fs-6 text-muted mt-3'>Our asset management venture<br/>
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className='row mt-5'>
                        <img src='media/images/streakLogo.png' className='mx-auto' style={{height:"50%", width:"70%"}}/>
                        <p className='fs-6 text-muted mt-3'>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='row'>
                        <img src='media/images/sensibullLogo.svg' className='mx-auto' style={{height:"50%", width:"70%"}}/>
                        <p className='fs-6 text-muted mt-4'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className='row mt-5'>
                        <img src='media/images/smallcaseLogo.png' className='mx-auto' style={{height:"50%", width:"70%"}}/>
                        <p className='fs-6 text-muted mt-5'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='row'>
                        <img src='media/images/tijori.svg' className='mx-auto' style={{height:"50%", width:"70%"}}/>
                        <p className='fs-6 text-muted mt-3'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
                    </div>
                    <div className='row mt-5'>
                        <img src='media/images/dittoLogo.png' className='mx-auto' style={{height:"50%", width:"70%"}}/>
                        <p className='fs-6 text-muted mt-3'>Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
                    </div>
                </div>
                <div className='col'></div>
            </div>
            <div className='row  my-5'>
                <div className='col-5'></div>
                <button className=' col-2 btn btn-primary'>Sign up for free</button>
                <div className='col-5'></div>
            </div>
        </div>
     );
}

export default Universe;