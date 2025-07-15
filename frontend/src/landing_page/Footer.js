import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
    return ( 
        <div className='container-fluid bg-secondary-subtle'>
        <div className='container bg-secondary-subtle mt-3'>
            <div className='row mb-5'></div>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <img src='media/images/logo.svg'style={{width:"35%"}}/>
                    </div>
                    <div className='row mt-3'>&copy; 2010 - {currentYear}, Zerodha Broking Ltd.</div>
                    <div className='row mt-3'>All rights reserved.</div>
                    <div className='row mt-3'>
                        <i class="fa-brands fa-x-twitter" style={{width:'fit-content'}}></i>
                        <i class="fa-brands fa-square-facebook" style={{width:'fit-content'}}></i>
                        <i class="fa-brands fa-instagram" style={{width:'fit-content'}}></i>
                        <i class="fa-brands fa-linkedin" style={{width:'fit-content'}}></i>
                    </div>
                    <hr/>
                    <div className='row mt-3'></div>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a href='' style={{textDecoration:"none"}}>About</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Philosophy</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Press & media</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Careers</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Zerodha Cares (CSR)</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Zerodha.tech</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Open source</a><br/>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href='' style={{textDecoration:"none"}}>Contact us</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Support portal</a><br/>
                    <a href='' style={{textDecoration:"none"}}>How to file a complaint?</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Status of your complaints</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Bulletin</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Circular</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Z-Connect blog</a><br/>
                    <a href='' style={{textDecoration:"none"}}>Downloads</a><br/>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href="" style={{textDecoration:"none"}}>Open demat account</a><br/>
                    <a href="" style={{textDecoration:"none"}}>Minor demat account</a><br/>
                    <a href="" style={{textDecoration:"none"}}>NRI demat account</a><br/>
                    <a href="" style={{textDecoration:"none"}}>Commodity</a><br/>
                    <a href="" style={{textDecoration:"none"}}>Dematerialisation</a><br/>
                    <a href="" style={{textDecoration:"none"}}>Fund transfer</a><br/>
                    <a href="" style={{textDecoration:"none"}}>MTF</a><br/>
                    <a href="" style={{textDecoration:"none"}}>Referral program</a><br/>
                </div>
            </div>
            <div className='row'>
                <div className='container'>
                <p style={{fontSize:"12px"}} className='text-muted  mt-5 text-start'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances

Smart Online Dispute Resolution | Grievances Redressal Mechanism

Investments in securities market are subject to market risks; read all the related documents carefully before investing.

Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.

"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
</div>
            </div>
        </div>
        </div>
     );
}

export default Footer;