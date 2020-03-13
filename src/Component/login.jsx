import React, { Component } from 'react'
import '../Style/Login.css'
import '../Style/card.css'
import '../Style/text.css'
export default class login extends Component {
    componentDidMount(){
        document.body.className="loginPage";
    }
    render() {
        return (
            <div className="loginPage">
                <div className="headingContainer">
                    <p className="heading login-heading">Hostel</p>
                    <p className="heading2 login-heading">Book hotel at your home.</p>
                </div>
                <div className = "card login-card">
                    <div>
                        <p className="heading3 login-sub-heading" >Login</p>
                    </div>
                </div>
            </div>
        )
    }
}
