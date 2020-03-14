import React, { Component } from 'react'
import '../Style/regis.css'
import '../Style/text.css'
export default class regis extends Component {
    render() {
        return (
            <div className="regisContainer">
                <div className="leftThumbnailRegis">
                </div>
                <div className="rightFormRegis">
                    <div className="regisHeading">
                        <p className="heading login-heading blueText font-regular">Hostel</p>
                        <p className="heading2 login-heading thaiFont-thick bigFont nomargin blackText">ลงทะเบียน</p>
                    </div>
                    <div className="regisFormContainer">
                    <div className="topdownMargin">
                        <p className="heading2 leftText thaiFont marginRight greyText">ชื่อผู้ใช้</p>
                        <input className="inputBox fullWidth"/>
                    </div>
                    <div className="nameBox topdownMargin">
                        <div className="usernameBoxRegis">
                            <p className="heading2 leftText thaiFont marginRight greyText">ชื่อ</p>
                            <input className="inputBox fullWidth"/>
                        </div>
                        <div className="passwordBoxRegis">
                            <p className="heading2 leftText thaiFont marginRight greyText">นามสกุล</p>
                            <input className="inputBox fullWidth"/>
                        </div>
                    </div>
                    <div className="topdownMargin">
                        <p className="heading2 leftText thaiFont marginRight greyText">อีเมลล์</p>
                        <input className="inputBox fullWidth"/>
                    </div>
                    <div className="topdownMargin" >
                        <p className="heading2 leftText thaiFont marginRight greyText">รหัสผ่าน</p>
                        <input className="inputBox fullWidth"/>
                    </div>
                    <div className="topdownMargin">
                        <p className="heading2 leftText thaiFont marginRight greyText">ยืนยันรหัสผ่าน</p>
                        <input className="inputBox fullWidth"/>
                    </div>
                    <div className="topdownMargin flexOn">
                        <input type="checkbox" className="checkBox"/>
                        <p className="heading2 greyText leftText thaiFont" style={{marginLeft : "10px"}}>ยอมรับ ข้อกำหนดการใช้งาน และ เงื่อนไขความเป็นส่วนตัว</p>
                    </div>
                    <div className="topdownMargin flexOn">
                        <button className="Button submitRegisButton thaiFont">ลงทะเบียน</button>
                    </div>
                    <div style={{marginBottom : "20px"}}>
                        <a href="/login" className="content blueText leftText thaiFont">กลับสู่หน้าลงชื่อเข้าใช้</a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
