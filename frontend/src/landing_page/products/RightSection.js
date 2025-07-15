import React from 'react'

function RightSection({title,description,src,link}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5 p-5 mt-5'>
                    <h1 className='mt-5'>{title}</h1>
                    <p>{description}</p>
                    <a className='mx-3' style={{textDecoration:"none"}}>{link}</a>
                </div>
                <div className='col-6 p-5'>
                    <img src={src}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;