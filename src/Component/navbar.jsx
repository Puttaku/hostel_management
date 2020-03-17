import React, { Component } from 'react'
import '../Style/navbar.css'
import '../Style/text.css'
import profile from "../Assets/Icon/user.png"
import {connect} from "react-redux"
import {withRouter,Link} from "react-router-dom"
class navbar extends Component {
    constructor(){
        super()
        this.clearLocal = this.clearLocal.bind(this)
        this.state = {
            loaded : false
        }
    }
    clearLocal(){
        localStorage.clear()
    }
    render() {
        return (
            this.props.location.pathname !== "/login" && this.props.location.pathname !== "/forget" && this.props.history.pathname !== "/register" && this.props.location.pathname !== "/reset" ? 
            <div className="navbarContainer">
                <div className="profileContainer">
                    <img src={profile} alt="profile" className="profilePic"/>
                    <div className="profileText">
                        <p className="heading2 leftText thaiFont leftMargin nomarginblock">Welcome , </p>
                        <p className="heading2 leftText thaiFont leftMargin nomarginblock">{localStorage.getItem('name')}</p>
                        <p className="heading2 leftText thaiFont leftMargin nomarginblock">{localStorage.getItem('surname')}</p>
                    </div>
                </div>
                <div className="navigatorContainer">
                        <Link to="/home" className="heading2 leftText thaiFont font28 leftMargin navmenuText">หน้าหลัก</Link>
                        <Link to="/booked" className="heading2 leftText thaiFont font28 leftMargin navmenuText">โรงแรมที่จอง</Link>
                        <Link onClick={()=>{this.clearLocal()}} to="/login" className="heading2 leftText thaiFont font28 leftMargin navmenuText">ออกจากระบบ</Link>
                </div>
            </div>
            : ""
        )
    }
}
const mapStateToProps = (state) => {
    return {
        name : state.userReducer.user.name,
        surname : state.userReducer.user.surname
    }
}
export default connect(mapStateToProps)(withRouter(navbar))
