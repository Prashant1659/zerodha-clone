import React from 'react'

function Education() {
    return ( 
        <div className='container mb-5 mt-3'>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/education.svg' alt=''/>
                </div>
                <div className='col mt-5'>
                    <h1 className='mb-4'>Free and open market education</h1>

                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='/' className='text-decoration-none'>Varsity <i class='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                    <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='/' className='text-decoration-none'>TradingQ&A <i class='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;