import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='heroImage' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button style={{width:"20%", margin:"0 auto"}} className='btn btn-primary p-3 fs-4'>Sign up Now</button>
            </div>
        </div>
     );
}

export default Hero;