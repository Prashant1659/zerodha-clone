import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 mb-5'>
                <h1 className=''>Charges</h1>
                <p className='text-muted'>List of all charges</p>
            </div>
            <div className='row'>
                <div className='col'></div>
                <div className='col-3 p-3'>
                    <div className='row'>
                        <img src='media/images/pricingEquity.svg'/>
                    </div>
                    <div className='row'>
                        <h2 className=''>Free equity delivery</h2>
                        <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                </div>
                <div className='col-3 p-3'>
                    <div className='row'>
                        <img src='media/images/intradayTrades.svg'/>
                    </div>
                    <div className='row'>
                        <h2 className=''>Intraday and F&O trades</h2>
                        <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                </div>
                <div className='col-3 p-3'>
                    <div className='row'>
                        <img src='media/images/pricingMF.svg'/>
                    </div>
                    <div className='row'>
                        <h2 className=''>Free direct MF</h2>
                        <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
                <div className='col'></div>
            </div>
        </div>
     );
}

export default Hero;