import React from 'react'

function SignUp(){
    return(
        <div className='container mt-5'>
            <div className='row text-center mt-5'>
                <h1 className='fs-1'>Open a free demat and trading account online</h1>
                <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
            <div className='row my-5'>
                <div className='col-1'></div>
                <div className='col-5'>
                    <img src='media/images/signup.png' style={{width:"100%"}}/>
                </div>
                <div className='col-1'></div>
                <div className='col-5'>
                    <h1>Signup Now</h1>
                    <p className='text-muted'>Or track your existing application</p>
                    <input type='number' maxLength={10} className='no-spinner my-3' /><br/>
                    <button className='btn btn-primary w-25 my-3'>Sign Up</button>
                    <p className='text-muted'>By proceeding, you agree to the Zerodha terms & privacy policy</p>
                </div>
                <div className='row mt-5'>
                    <div className='row text-center my-5'>
                        <h1>Investment options with Zerodha demat account</h1>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-5'>
                            <div className='row'>
                                <div className='col'>
                                    <img />
                                </div>
                                <div className='col'>
                                    <h2>Stocks</h2>
                                    <p>Invest in all exchange-listed securities</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <img />
                                </div>
                                <div className='col'>
                                    <h2>IPO</h2>
                                    <p>Apply to the latest IPOs instantly via UPI</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='row'>
                                <div className='col'>
                                    <img />
                                </div>
                                <div className='col'>
                                    <h2>Mutual Funds</h2>
                                    <p>Invest in commission-free direct mutual funds</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <img />
                                </div>
                                <div className='col'>
                                    <h2>Futures and options</h2>
                                    <p>Hedge and mitigate market risk through simplified F&O trading</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'></div>
        </div>
    )
}

export default SignUp;