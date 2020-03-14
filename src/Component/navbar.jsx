import React, { Component } from 'react'
import '../Style/navbar.css'
import '../Style/text.css'
import profile from "../Assets/Icon/user.png"
export default class navbar extends Component {
    render() {
        return (
            <div className="navbarContainer">
                <div className="profileContainer">
                    <img src={profile} alt="profile" className="profilePic"/>
                    <div className="profileText">
                        <p className="heading2 leftText thaiFont leftMargin nomarginblock">Welcome , </p>
                        <p className="heading2 leftText thaiFont leftMargin nomarginblock">Puttipong</p>
                        <p className="heading2 leftText thaiFont leftMargin nomarginblock">Sintoppun</p>
                    </div>
                </div>
                <div className="navigatorContainer">
                        <a href="/home" className="heading2 leftText thaiFont font28 leftMargin navmenuText">หน้าหลัก</a>
                        <a href="/home" className="heading2 leftText thaiFont font28 leftMargin navmenuText">โรงแรมที่จอง</a>
                        <a href="/login" className="heading2 leftText thaiFont font28 leftMargin navmenuText">ออกจากระบบ</a>
                </div>
            </div>
        )
    }
}
