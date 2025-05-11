import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'

function Navbar(props) {
    const [selectvalue, SetValue] = useState("User")

    const handleChange = (event) => {
        event.preventDefault()
        SetValue(event.target.value);
        const {history} = props
        history.replace(event.target.value)
    };
    
    return (
        <div className='nav-cont'>
            <div className='logo-menu'>
                <h1 className='heading-logo'>CREDIT APP</h1>
                {selectvalue !== "User" ? <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746866260/align-justify_pnjfyk.png' height={25} alt='menu'/>: null}
            </div>
        {selectvalue === "User" ? <div className='nav-symbl-1'>
            <div className='nav-content-symbl-1'>
                <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746807721/Vector_io6czo.png' alt='home' className='image-3'/>
                <p className='text-content'>Home</p>
            </div>
            <div className='nav-content-symbl-3'>
                <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746807760/tabler_currency-naira_ug5wgp.png' alt='payment' className='image-3'/>
                <p className='text-content'>Payments</p>
            </div>
            <div className='nav-content-symbl-3'>
                <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746807746/Vector_1_mopdms.png' alt='budget' className='image-3'/>
                <p className='text-content'>Budget</p>
            </div>
            <div className='nav-content-symbl'>
                <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746807734/Vector_2_der0mv.png' alt='card' className='image-3'/>
                <p className='text-content'>Card</p>
            </div>
        </div>: null}
        <div className='nav-symbl-2'>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806605/Vector_z9cmge.png' alt='noti' className='image'/>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806618/Vector_1_zkob8c.png' alt='message' className='image2'/>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1746806630/account_circle_rgpyjr.png' alt='profile' className='image'/>
            <div>
                <select className='select' value={selectvalue} onChange={handleChange}>
                    <option value="User">User</option>
                    <option value="/Verified">Verified</option>
                    <option value="/Admin">Admin</option>
                </select>
            </div>
        </div>
        </div>
    )
    
}

export default withRouter(Navbar)
