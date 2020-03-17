import React, { Component } from 'react'
import '../Style/regis.css'
import '../Style/text.css'
import {regisUser} from "../Constant/api"
import {Link} from "react-router-dom"
export default class regis extends Component {
    constructor(){
        super()
        this.state = {
            accept : false
        }
        this.register = this.register.bind(this)
    }
    acceptCheck(){
        this.setState({
            accept : !this.state.accept
        })
    }
    componentDidMount(){
        document.body.className="regisPage";
    }
    async register(){
        if(this.username.value === "" || this.name.value === "" || this.surname.value === "" || this.email.value === "" || this.password.value === "" || this.passcon.value === ""){
            alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        }
        else if(this.password.value !== this.passcon.value){
            alert("รหัสผ่านไม่ตรงกัน")
        }
        else if(this.state.accept === false){
            alert("โปรดยอมรับ ข้อกำหนดการใช้งาน และ เงื่อนไขความเป็นส่วนตัว")
        }
        else{
            await fetch(regisUser+"?username="+this.username.value+"&name="+this.name.value+"&surname="+this.surname.value+"&email="+this.email.value+"&password="+this.password.value,{
                method : "POST",
                header : {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }).then(res => {
                return res.json()
            }).then(res => {
                if(res.Status === 200){
                    alert(res.Key)
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
                        <input name="username" ref={(e)=>this.username = e} className="inputBox fullWidth"/>
                    </div>
                    <div className="nameBox topdownMargin">
                        <div className="usernameBoxRegis">
                            <p className="heading2 leftText thaiFont marginRight greyText">ชื่อ</p>
                            <input name="name" ref={(e)=>this.name = e} className="inputBox fullWidth"/>
                        </div>
                        <div className="passwordBoxRegis">
                            <p className="heading2 leftText thaiFont marginRight greyText">นามสกุล</p>
                            <input name="surname" ref={(e)=>this.surname = e} className="inputBox fullWidth"/>
                        </div>
                    </div>
                    <div className="topdownMargin">
                        <p className="heading2 leftText thaiFont marginRight greyText">อีเมลล์</p>
                        <input required type="email" name="email" ref={(e)=>this.email = e} className="inputBox fullWidth"/>
                    </div>
                    <div className="topdownMargin" >
                        <p className="heading2 leftText thaiFont marginRight greyText">รหัสผ่าน</p>
                        <input name="password" ref={(e)=>this.password = e} className="inputBox fullWidth"/>
                    </div>
                    <div className="topdownMargin">
                        <p className="heading2 leftText thaiFont marginRight greyText">ยืนยันรหัสผ่าน</p>
                        <input name="passcon" ref={(e)=>this.passcon = e} className="inputBox fullWidth"/>
                    </div>
                    <div className="topdownMargin flexOn">
                        <input onChange={()=>{this.acceptCheck()}} type="checkbox" className="checkBox"/>
                        <p className="heading2 greyText leftText thaiFont" style={{marginLeft : "10px"}}>ยอมรับ ข้อกำหนดการใช้งาน และ เงื่อนไขความเป็นส่วนตัว</p>
                    </div>
                    <div className="topdownMargin flexOn">
                        <button onClick={()=>{this.register()}} className="Button submitRegisButton thaiFont">ลงทะเบียน</button>
                    </div>
                    <div style={{marginBottom : "20px"}}>
                        <Link to="/login" className="content blueText leftText thaiFont">กลับสู่หน้าลงชื่อเข้าใช้</Link>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
