import React, { Component } from 'react'
import '../Style/forget.css'
import '../Style/text.css'
import {reset} from "../Constant/api"
import {withRouter,Link} from "react-router-dom"
 class restore extends Component {
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
        var input = this.props.location.search;
        var token = input.slice(7);
            console.log(token)
        if(this.password.value === "" || this.passcon.value === "" || token === ""){
            alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        }
        else if(this.password.value !== this.passcon.value){
            alert("รหัสผ่านไม่ตรงกัน")
        }
        else{
            await fetch(reset+"?token="+token+"&password="+this.password.value,{
                method : "PUT",
                header : {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }).then(res => {
                return res.json()
            }).then(res => {
                console.log(res)
                if(res.Status === 200){
                    alert("เปลี่ยนรหัสผ่านเสร็จสิ้น กลับสู่หน้า Login")
                    this.props.history.push("/login")
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
                    <p className="heading2 login-heading thaiFont-thick bigFont nomargin">เปลี่ยนรหัสผ่าน</p>
                    <p className="heading2 leftText thaiFont marginRight">กรุณากรอกรหัสผ่านใหม่</p>
                </div>
                <div className="forgetTextbox">
                    <p className="heading2 leftText thaiFont marginRight greyText2">รหัสผ่าน</p>
                    <input name="password" ref={(e)=>this.password = e} style={{width : "60%"}} className="forgetEmail inputBox"/>
                    <p className="heading2 leftText thaiFont marginRight greyText2">รหัสผ่าน</p>
                    <input name="passcon" ref={(e)=>this.passcon = e} style={{width : "60%"}} className="forgetEmail inputBox"/>
                    <button onClick={()=>{this.sendEmail()}} className="Button forgetButton thaiFont">ตกลง</button>
                </div>
                <Link to="/login" className="content blueText leftText thaiFont">กลับสู่หน้าลงชื่อเข้าใช้</Link>
            </div>
        )
    }
}
export default withRouter(restore)
