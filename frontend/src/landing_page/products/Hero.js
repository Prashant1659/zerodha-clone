import React from 'react'
import {Link} from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container text-center' style={{marginTop:"10%", marginBottom:"10%"}}>
            <h1 className='m-3 mt-5'>Zerodha Products</h1>
            <h6 className='m-3 fs-5 '>Sleek, modern, and intuitive trading platforms</h6>
            <p className='mt-3'>Check out our <Link style={{textDecoration:"none"}}>investment offerings <i class='fa fa-long-arrow-right' aria-hidden="true"></i></Link></p>
        </div>
     );
}

export default Hero;