import React, { Component } from 'react'
import '../Style/forget.css'
import '../Style/text.css'
import {forgetemail} from "../Constant/api"
import {Link} from "react-router-dom"
export default class forget extends Component {
    constructor(){
        super()
        this.sendEmail = this.sendEmail.bind(this);
        this.state = {
            email : false
        }
    }
    componentDidMount(){
        document.body.className = "forgetPage";
    }
    async sendEmail(){
        if(this.email.value === ""){
            alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        }
        else{
            await fetch(forgetemail+"?email="+this.email.value,{
                method : "PUT",
                header : {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }).then(res => {
                return res.json()
            }).then(res => {
                if(res.Status === 200){
                    this.setState({
                        email : true
                    })
                }
                else{
                    alert(res.Key)
                }
            })
        }
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
                    <p className="heading2 leftText thaiFont marginRight greyText2">อีเมลล์</p>
                    <input name="email" ref={(e)=>this.email = e} className="forgetEmail inputBox"/>
                    <button onClick={()=>{this.sendEmail()}} className="Button forgetButton thaiFont">ตกลง</button>
                    {this.state.email ? <p className="heading2 leftText thaiFont marginRight">link เปลี่ยนรหัสผ่านได้ส่งไปที่อีเมลล์ของคุณแล้ว โปรดทำการตรวจสอบ</p> : ""}
                </div>
                <Link to="/login" className="content blueText leftText thaiFont">กลับสู่หน้าลงชื่อเข้าใช้</Link>
            </div>
        )
    }
}
