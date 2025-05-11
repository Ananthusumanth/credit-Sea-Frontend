import React from 'react'
import Navbar from '../Navbar'
import './index.css'
import { Link } from 'react-router-dom'

function UserDashboardLoan() {
  return (
    <div className='user-container'>
      <Navbar />
      <div className='user-body'>
        <div className='get-loan-section'>
          <div className='nav-loan'>
            <div className='image-loan'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746842410/Vector_v19dxh.png' alt='loan-image' style={{verticalAlign: "center"}}/>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746842465/Vector_1_t1jknv.png' alt='loan-image' style={{verticalAlign: "top"}}/>
            </div>
            <div>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746807760/tabler_currency-naira_ug5wgp.png' alt='payments' height={70} style={{verticalAlign: "top"}}/><sup className='sup'>DEFICIT</sup>
            </div>
            <div>
              <p style={{verticalAlign: "bottom"}} className='sub'>0.0</p>
            </div>
          </div>
          <Link to="/App-Form"><button type='button' className='get-loan-button'>Get A Loan</button></Link>
        </div>
        <div className='buttons-section'>
          <button type='button' className='buttons-sec-button1'>Borrow Cash</button>
          <button type='button' className='buttons-sec-button'>Transact</button>
          <button type='button' className='buttons-sec-button'>Deposit Cash</button>
        </div>
        <div className='input-section'>
          <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746846050/Vector_2_p5bnbo.png' height={15} alt='search-icon'/>
          <input type='search' placeholder='Search' className='input-search'/>
        </div>
        <div className='nav-container-loan'>
          <div className='nav-v1'>
            <h1 className='h1'>Applied Loans</h1>
            <div className='nav-v'>
              <p className='para'>Sort</p>
              <p className='para'>Filter</p>
            </div>
          </div>
          <div className='nav-v3'>
            <p className='user-recent'>Loan Officer</p>
            <p className='name'>Amount</p>
            <p className='date'>Date Applied</p>
            <p className='action'>Status</p>
            <p className='icon'></p>
          </div>
          <hr className='hr'/>
          <div className='nav-v2'>
            <p className='user-recent'><img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806630/account_circle_rgpyjr.png' alt='pfofile-logo' className='img-p'/>John Okah</p>
            <p className='name'>50000</p>
            <p className='date'>Jan 02 2020</p>
            <button type='button' className="action pending">PENDING</button>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746936365/more_-_vertical_dtbruv.png' height={50} alt='icon' className='icon'/>
          </div>
          <hr className='hr'/>
          <div className='nav-v2'>
            <p className='user-recent'><img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806630/account_circle_rgpyjr.png' alt='pfofile-logo' className='img-p'/>John Okah</p>
            <p className='name'>20000</p>
            <p className='date'>April 08 2021</p>
            <button type='button' className="action verified">VERIFIED</button>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746936365/more_-_vertical_dtbruv.png' height={50} alt='icon' className='icon'/>
          </div>
          <hr className='hr'/>
          <div className='nav-v2'>
            <p className='user-recent'><img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806630/account_circle_rgpyjr.png' alt='pfofile-logo' className='img-p'/>John Okah</p>
            <p className='name'>10000</p>
            <p className='date'>May 03 2022</p>
            <button type='button' className="action reject">REJECTED</button>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746936365/more_-_vertical_dtbruv.png' height={50} alt='icon' className='icon'/>
          </div>
          <hr className='hr'/>
          <div className='nav-v2'>
            <p className='user-recent'><img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806630/account_circle_rgpyjr.png' alt='pfofile-logo' className='img-p'/>John Okah</p>
            <p className='name'>5000</p>
            <p className='date'>June 05 2023</p>
            <button type='button' className="action approved">APPROVED</button>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746936365/more_-_vertical_dtbruv.png' height={50} alt='icon' className='icon'/>
          </div>
          <hr className='hr'/>
        </div>
      </div>
    </div>
  )
}

export default UserDashboardLoan
