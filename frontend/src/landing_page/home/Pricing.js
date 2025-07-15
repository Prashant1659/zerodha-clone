import React from 'react'

function Pricing() {
    return ( 
        <div className='container mb-5 p-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-4 l-3'>
                    <h1 className='mb-3'>Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/' className='text-decoration-none'>See Pricing <i class='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-6 d-flex'>
                    <div className='col-3 d-flex flex-direction-column'>
                        <img src='media/images/pricing0.svg' className='col-8' alt=''/>
                        <p className='pt-5 text-muted'>Free account opening</p>
                    </div>
                    <div className='col-6 d-flex flex-direction-column'>
                    <img src='media/images/pricingEquity.svg' className='col-4' alt=''/>
                    <p className='pt-5 col-8 text-muted'> Free equity delivery
                    and direct mutual funds</p>
                    </div>
                    <div className='col-3 d-flex flex-direction-column'>
                    <img src='media/images/pricing0.svg' className='col-8' alt=''/>
                    <p className='pt-5 text-muted'>Intraday and
                    F&O</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;