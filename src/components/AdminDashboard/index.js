import React, { useEffect, useState } from 'react'
import './index.css';
import Charts from '../Charts';

const apiResponseContent = {
    initally: "INITIAL",
    inProgress: "INPROGRESS",
    success: "SUCCESS",
    isFailed: "ISFAILED"
}

function AdminDashboard(props) {

  const [response, setResponse] = useState({
    status: apiResponseContent.initally,
    verificatiobData: null
  })

  const getApiverificationData = async () => {
    const response = await fetch("https://creditsea-server.onrender.com")
    const data = await response.json()
    if (response.ok){
        setResponse({verificatiobData: data, status: apiResponseContent.success})
    }else {
        setResponse({status: apiResponseContent.isFailed})
    }
  }

  useEffect (() =>{
    setResponse({status: apiResponseContent.inProgress})
    getApiverificationData()
  },[])

  const loadingview = () => (
        <div className='loader'>
            <p>Loading........</p>
        </div>
    )

  const isfailedView = () => {
      <div className='loader'>
          <p>Failed to load......</p>
      </div>
  }

  const successView = () => {
    let totalSavings = 0;
    let totalRecvied = 0;

    response.verificatiobData.forEach((each) => {
      if (each.status === "VERIFIED"){
        totalSavings = totalSavings + each.Loan
      }
    })

    response.verificatiobData.forEach((each) => {
        totalRecvied = totalRecvied + each.Loan
    })



    return (
       <div className='v-container-body'>
      <h1 className='h1'>Dashboard</h1>
      <div className='verified-Dashboard'>
        <div className='v-dash'>
          <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746842410/Vector_v19dxh.png' alt='loan-logo' className='v-logo'/>
          <div className='v-content-dash'>
            <p className='para-2'>{response.verificatiobData.length}</p>
            <p className='para-2'>LOAN</p>
          </div>
        </div>
        <div className='v-dash'>
          <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868553/Vector_3_eawach.png' alt='borrowers-logo' className='v-logo'/>
          <div className='v-content-dash'>
            <p className='para-2'>50</p>
            <p className='para-2'>BORROWRES</p>
          </div>
        </div>
        <div className='v-dash'>
          <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746931405/cash-multiple_ptjbim.png' alt='logo' className='v-logo'/>
          <div className='v-content-dash'>
            <p className='para-2'>50</p>
            <p className='para-2'>CASH DISBURSED</p>
          </div>
        </div>
        <div className='v-dash'>
          <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868642/Vector_10_oipl9k.png' alt='logo' className='v-logo'/>
          <div className='v-content-dash'>
            <p className='para-2'>{totalSavings}</p>
            <p className='para-2'>SAVINGS</p>
          </div>
        </div>
        <div className='v-dash'>
          <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868571/Vector_4_qfgfvk.png' alt='logo' className='v-logo'/>
          <div className='v-content-dash'>
            <p className='para-2'>30</p>
            <p className='para-2'>REPAID LOANS</p>
          </div>
        </div>
        <div className='v-dash'>
          <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746807760/tabler_currency-naira_ug5wgp.png' alt='logo' className='v-logo'/>
          <div className='v-content-dash'>
            <p className='para-2'>{totalRecvied}</p>
            <p className='para-2'>CASH RECEVIED</p>
          </div>
        </div>
        <div className='v-dash'>
          <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746939925/Vector_drdubc.png' alt='logo' className='v-logo'/>
          <div className='v-content-dash'>
            <p className='para-2'>50</p>
            <p className='para-2'>OTHER ACCOUNTS</p>
          </div>
        </div>
        <div className='v-dash'>
          <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746939935/Vector_1_dlwzls.png' alt='logo' className='v-logo'/>
          <div className='v-content-dash'>
            <p className='para-2'>50</p>
            <p className='para-2'>ACTIVE USERS</p>
          </div>
        </div>
      </div>
      <div className='nav-container-v'>
        <div className='nav-v1'>
          <h1 className='h1'>Applied Loans</h1>
          <div className='nav-v'>
            <p className='para'>Sort</p>
            <p className='para'>Filter</p>
          </div>
        </div>
        <div className='nav-v3'>
          <p className='user-recent'>User Recent Activity</p>
          <p className='name'>Customer name</p>
          <p className='date'>Date</p>
          <p className='action'>Action</p>
          <p className='icon'></p>
        </div>
        <hr className='hr'/>
        {response.verificatiobData.length === 0 ? <p>Empty..........</p>
        :
        response.verificatiobData.map((each) => (
            <div key={each.id}>
              <div className='nav-v2'>
                <p className='user-recent'><img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806630/account_circle_rgpyjr.png' alt='pfofile-logo' className='img-p'/>{each.Reason}</p>
                <p className='name'>{each.name}</p>
                <p className='date'>{each.Date}</p>
                <button type='button' className={each.status === "VERIFIED" ? "action-2" : "action-3"}>{each.status === "VERIFIED" ? "APPROVED" : each.status}</button>
                <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746936365/more_-_vertical_dtbruv.png' height={50} alt='icon' className='icon'/>
              </div>
              <hr className='hr'/>
            </div>
        ))
        }
      </div>
      <div className='charts-recent'>
        <Charts />
      </div>
    </div>
    )
  }
     


  const renderResponse = () => {
        const {status} = response
        switch (status) {
            case apiResponseContent.inProgress:
                return loadingview()
            case apiResponseContent.isFailed:
                return isfailedView()
            case apiResponseContent.success:
                return successView()
            default:
                return loadingview()
        }
    }

  const handleChange = (event) => {
      const {history} = props
      history.replace(event.target.value)
  };


  return (
    <div>
      <div className='nav-cont'>
        <div className='logo-menu'>
            <h1 className='heading-logo'>CREDIT APP</h1>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746866260/align-justify_pnjfyk.png' height={25} alt='menu'/>
        </div>
        <div className='nav-symbl-2'>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806605/Vector_z9cmge.png' alt='noti' className='image'/>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806618/Vector_1_zkob8c.png' alt='message' className='image2'/>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806630/account_circle_rgpyjr.png' alt='profile' className='image'/>
            <div>
                <select className='select' onChange={handleChange}>
                    <option value="/Admin">Admin</option>
                    <option value="/Verified">verifier</option>
                    <option value="/">User</option>
                </select>
            </div>
        </div>
        </div>
      <div className='verification-section-container'>
        <div className='side-bar-verified'>
            <div className='dash-box'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806630/account_circle_rgpyjr.png'  alt='logo' className='image-icon-1'/>
              <p className='para-1'>John Doe</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746807721/Vector_io6czo.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Dashboard</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868553/Vector_3_eawach.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Borrowers</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746842410/Vector_v19dxh.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Loans</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868571/Vector_4_qfgfvk.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Repayments</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868583/Vector_5_zvcuzg.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Loan Parameters</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868595/Vector_6_xlwiie.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Accounting</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868606/Vector_7_mlcj31.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Reports</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868620/Vector_8_ieaw2z.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Collateral</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868630/Vector_9_vuaegs.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Access Configuration</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868642/Vector_10_oipl9k.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Savings</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868653/Vector_11_iqdomf.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Expenses</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868666/Vector_12_wtltud.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>E-Signature</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868678/Vector_13_ln4ymk.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Investor Accounts</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868687/Vector_14_gl3hrb.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Calendar</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868699/Vector_15_tyxmtw.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Settings</p>
            </div>
            <div className='dash-box-1'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746868709/Vector_16_ha9kac.png' height={20} alt='logo' className='image-icon-1'/>
              <p className='para'>Sign Out</p>
            </div>
        </div>
        {renderResponse()}
      </div>
    </div>
  )
}

export default AdminDashboard
