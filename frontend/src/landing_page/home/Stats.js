import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 p-4'>
            <div className='row p-4'>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <h1 className='fs-2'>Trust with Confidence</h1>
                    <h2 className='fs-4 mt-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India. </p>
                    <h2 className='fs-4 mt-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4 mt-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4 mt-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <img src='media/images/ecosystem.png' className='col-md-11 mx-5'  alt=''/>
                    <div className='text-center'>
                        <a href='/' className='mx-5 text-decoration-none'>Explore our products <i class='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                        <a href='/' className='text-decoration-none'>Try Kite <i class='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;