import React from 'react'
import '../component/HeroSection.css';
// rfc shortcut
export default function HeroSection() {
    return (
        <div>
            <nav className='navbar'>
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <img src="https://img.freepik.com/free-vector/electronic-documentation-man-with-registration-checking-repository-log-online-approval-screen-form-validation-page-expense-chronicles-vector-isolated-concept-metaphor-illustration_335657-4323.jpg?t=st=1723718975~exp=1723722575~hmac=cb2eda008f60dfe2e2dbc3688b41f12c942e180005ff607a7df80b3c872e6de1&w=740" alt="LOGO" className='logo' />
                    </div>
                    <div className="navbar-sections">
                        < p className='section1'>Home</p>
                        < p className='section2'>Services</p>
                        < p className='section3'>Contact</p>
                    </div>
                </div>
            </nav>
            <div className="body">
                <div className="body-img-container">
                    <img src="https://img.freepik.com/free-photo/closeup-economist-using-calculator-while-going-through-bills-taxes-office_637285-3156.jpg?t=st=1723720647~exp=1723724247~hmac=d85f49927a41d0a4830229706ee1f28efba1cf22be5a0e144fa9ac6ccc77c710&w=996" alt="image" />
                </div>
                <div className="body-qoute">
                    <p className="qoute-head">
                    Smart Billing Software for Shop Efficiency
                    </p>
                    <p className="qoute-sub">
                    Good billing keeps your business running smoothly and builds trust with your customers. </p>
                    <div className="body-btn">
                        <button >Get Started</button>
                    </div>
                    </div>
                    
            </div>
        </div>
    )
}

