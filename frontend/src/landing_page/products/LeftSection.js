import React from 'react'

function LeftSection({src,title,linkOne,linkTwo,description}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src={src}/>
                </div>
                <div className='col-5 p-5 mt-5 mx-5'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div><a className='mx-3' style={{textDecoration:"none"}}>{linkOne}</a>
                    <a className='mx-3' style={{textDecoration:"none", marginRight:"10%"}}>{linkTwo}</a>
                    </div>
                    <div className='mt-3'>
                    <a className='mx-3'><img src='media/images/googlePlayBadge.svg' /></a>
                    <a className='mx-3'><img src='media/images/appstoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;