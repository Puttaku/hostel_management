import React, { Component } from 'react'
import '../Style/forget.css'
import '../Style/text.css'
export default class forget extends Component {
    componentDidMount(){
        document.body.className = "forgetPage";
    }
    render() {
        return (
            <div className="forgetPageContainer">
                <div className="forgetHeader">
                    <p className="heading login-heading">Hostel</p>
                    <p className="heading2 login-heading thaiFont-thick bigFont nomargin">ลืมรหัสผ่าน</p>
                    <p className="heading2 leftText thaiFont marginRight">ไม่ต้องห่วง! เพียงคุณกรอกอีเมลล์ที่ใช้สมัครเรา แล้วเราจะส่ง link เปลี่ยนรหัสผ่านให้คุณ</p>
                </div>
                <div className="forgetTextbox">
                    <p className="heading2 leftText thaiFont marginRight greyText">อีเมลล์</p>
                    <input className="forgetEmail inputBox"/>
                    <button className="Button forgetButton thaiFont">ตกลง</button>
                </div>
                <a href="/login" className="content blueText leftText thaiFont">กลับสู่หน้าลงชื่อเข้าใช้</a>
            </div>
        )
    }
}
