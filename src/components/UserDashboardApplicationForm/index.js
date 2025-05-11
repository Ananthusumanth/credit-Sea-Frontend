import React, { useState } from 'react';
import Navbar from '../Navbar';
import './index.css';

function UserDashboardApplicatioForm() {
  const [name, setname] = useState("")
  const [Loan, setLoan] = useState("")
  const [LoanINMOnths, setLoanINMOnths] = useState("")
  const [status, setStatus] = useState("")
  const [address, setaddress] = useState("")
  const [Reason, setReason] = useState("")


  const handleForm = async (event) => {
    event.preventDefault();
    const url = "https://creditsea-server.onrender.com/AppForm"
    const details = {name, Loan, Reason, address, LoanINMOnths, status}
    console.log(details)
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
    }
    const response = await fetch(url, options)
    await response.json()
    window.location.reload();
  }

  return (
    <>
      <Navbar />
      <div className='application-section-body'>
        <form className='apply-section' onSubmit={handleForm}>
          <h1 className='appli-heading'>APPLY FOR LOAN</h1>
          <div className='input-section-1'>
            <div className='input-div'>
              <label htmlFor='input'>Full name as it appers in bank account</label>
              <input type='text' id='input' placeholder='Full name as it appers in bank account' onChange={(e) => setname(e.target.value)} required/>
            </div>
            <div className='input-div'>
              <label htmlFor='input'>How much do you need?</label>
              <input type='text' id='input' placeholder='How much do you need?' onChange={(e) => setLoan(e.target.value)} required/>
            </div>
          </div>
          <div className='input-section-2'>
            <div className='input-div'>
              <label htmlFor='input'>{`Loan tenture (in months)`}</label>
              <input type='text' id='input' placeholder={`Loan tenture (in months)`} onChange={(e) => setLoanINMOnths(e.target.value)} required/>
            </div>
            <div className='input-div'>
              <label htmlFor='input'>Employment status</label>
              <input type='text' id='input' placeholder='Employment status' onChange={(e) => setStatus(e.target.value)} required/>
            </div>
          </div>
          <div className='input-section-3'>
            <div className='input-div'>
              <label htmlFor='textArea'>Reason for Loan</label>
              <textarea type='text' placeholder='Reason for Loan' id='textArea' rows={4} onChange={(e) => setReason(e.target.value)} required/>
            </div>
            <div className='input-div'>
              <label htmlFor='input'>Employment address</label>
              <input type='text' id='input' placeholder='Employment address' onChange={(e) => setaddress(e.target.value)} required/>
            </div>
          </div>
          <h6>Charts</h6>
          <div className='input-section-4'>
            <div className='input-div-4'>
              <input type='radio' id='input'/>
              <label htmlFor='input'>I have read the important information and accept that by completing the application I will be bound by the terms </label>
            </div>
            <div className='input-div-4'>
              <input type='radio' id='input'/>
              <label htmlFor='input'>Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.</label>
            </div>
          </div>
          <button type='submit' className='button-submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default UserDashboardApplicatioForm
