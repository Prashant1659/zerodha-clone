import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <div className='container'>
            <Hero />
            <hr/>
            <LeftSection 
            src="media/images/kite.png" 
            description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            linkOne="Try demo"
            linkTwo="Learn more"
            title="Kite"
             />
            <RightSection 
            src="media/images/console.png"
            title="Console" 
            description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
            link="Learn more"
            />
            <LeftSection 
            src="media/images/coin.png" 
            description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            linkOne="Try demo"
            title="Coin"
             />
            <RightSection 
            src="media/images/kiteconnect.png"
            title="Kite Connect API" 
            description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            link="Learn more"
            />
            <LeftSection 
            src="media/images/varsity.png" 
            description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            title="Varsity mobile"
             />
            <Universe />
        </div>
     );
}

export default ProductPage;