import React, { Component } from 'react'
import '../Style/Login.css'
import '../Style/card.css'
import '../Style/text.css'
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {userLogin} from "../Redux/Action/userAction"
class login extends Component {
    constructor(props){
        super(props);
        this.toHome = this.toHome.bind(this);
    }
    toHome(){
        console.log(this.username.value + " : " + this.password.value)
        // this.props.history.push("/home");
    }
    componentDidMount(){
        document.body.className="loginPage";
        console.log("Props : ",this.props)
    }
    render() {
        return (
            // หน้า Login
            <div className="loginPage">
                <div className="headingContainer">
                    <p className="heading login-heading">Hostel</p>
                    <p className="heading2 login-heading">Book hotel at your home.</p>
                </div>
                <div className = "card login-card">
                    <div classname = "loginContent">
                        <div className = "loginBoxheader">
                            <p className="heading3 login-sub-heading">Login</p>
                        </div>
                        <div className="loginTextbox">
                            <p className="heading2 greyText leftText thaiFont">ชื่อผู้ใช้</p>
                            <input name="username" ref={(c)=>this.username = c} className = "inputBox usernameBox"/>
                            <p className="heading2 greyText leftText thaiFont">รหัสผ่าน</p>
                            <input name="password" ref={(c)=>this.password = c} className = "inputBox passwordBox"/>
                            <div style={{width : "100%",textAlign : "left",display : "flex"}}>
                                <input type="checkbox" className="checkBox"/>
                                <p className="heading2 greyText leftText thaiFont" style={{marginLeft : "10px"}}>จดจำผู้ใช้</p>
                            </div>
                            <button className="Button submitLoginButton thaiFont" onClick={()=>{this.toHome()}}>ลงชื่อเข้าใช้</button>
                        </div>
                        <div className="linkBox">
                            <a href="/register" className="content greyText leftText thaiFont">ยังไม่มีบัญชี ? ลงทะเบียนที่นี่</a>
                            <a href="/forget" className="content greyText leftText thaiFont">ลืมรหัสผ่าน?</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.userReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogin : bindActionCreators(userLogin,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(login))
