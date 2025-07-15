import React from 'react'

function Hero() {
    return ( 
        <div className='container-fluid bg-primary text-white h-fill'>
            <div className='row container mx-5 mb-5' style={{height:"60%"}}>
                <div className='row mb-5 mt-5'>
                    <h4 className='col-10'>Support Portal</h4>
                    <a  className='col-2 text-white' style={{marginLeft:""}}>Track Tickets</a>
                </div>
                <div className='row mt-5 mb-5'>
                    <div className='col-1'></div>
                    <div className='col-6'>
                        <h3 className='mb-5'>Search for an answer or browse help topics to create a ticket</h3>
                        <input className='p-4 col-12 border-radius-5' style={{height:"20%"}} placeholder='Eg. how do i active F&O, why is my order rejected...' ></input>
                        <div className='mt-3 container-fluid'>
                            <div className='row mt-3 mb-2'>
                                <a href='' className='col-4 text-white text-decoration-none' style={{textDecoration:""}}>Track account opening</a>
                                <a href='' className='col-5 text-white text-decoration-none' style={{textDecoration:""}}>Track segment activation</a>
                                <a href='' className='col-3 text-white text-decoration-none' style={{textDecoration:""}}>Intraday margins</a>
                            </div>
                            <div className='row'>
                                <a href='' className='col-4 text-white' style={{textDecoration:"none"}}>Kite user manual</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-5'>
                        <p>Featured</p>
                        1.<a href='' className='my-2' style={{textDecoration:"none", color:"white"}}>Quarterly Settlement of Funds - July 2025</a><br/>
                        2.<a href='' className='my-2' style={{textDecoration:"none", color:"white"}}>Exclusion of F&O contracts on 8 securities from August 29, 2025</a>
                    </div>
                </div>
            </div>
            <div className='mt-5'>

            </div>
        </div>
     );
}

export default Hero;